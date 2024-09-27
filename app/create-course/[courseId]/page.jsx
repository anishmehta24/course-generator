"use client"
import { db } from '@/configs/db'
import { CourseList } from '@/configs/schema'
import { useUser } from '@clerk/nextjs'
import { and, eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import CourseBasicInfo from './_components/CourseBasicInfo'
import CourseDetail from './_components/CourseDetail'
import ChapterList from './_components/ChapterList'
import { Button } from '@/components/ui/button'
import { GenerateChapterContent_AI } from '@/configs/AiModel'
import LoadingDialogue from '../_components/LoadingDialogue'
import service from '@/configs/service'

function CourseLayout({params}) {
  const {user} = useUser();
  const [course,setCourse] = useState([]);
  const [loading,setLoading] = useState(false);
  useEffect(()=>{
    console.log(params)
    params&&GetCourse();
  },[params,user])

  const GetCourse = async()=>{
    const result = await db.select().from(CourseList)
    .where(and(eq(CourseList.courseId,params?.courseId),
    eq(CourseList.createdby,user?.primaryEmailAddress?.emailAddress)))
    setCourse(result[0]);
    console.log(result)
  }

  const GenerateChapterContent=()=>{
    setLoading(true);
    const chapters = course?.courseOutput?.course?.chapters;
    chapters.forEach(async(chapter,index)=>{
      const PROMPT = 'Explain the concept in detail on Topic:'+course?.name+' , Chapter:'+chapter.name+' , in JSON Format with list of array with field as title,explan ation on given chapter on detail ,Code Example(Code field in <precode format) if applicable'
      console.log(PROMPT);

      if(index<3)
      {
        try {
          let videoId=' ';
          const result =  await GenerateChapterContent_AI.sendMessage(PROMPT);
          console.log(result?.response?.text());
          //GENERATE VIDEO URL

          service.getVideos(course?.name+':'+chapter?.name).then(resp=>{
            console.log(resp)
            videoId=resp?.id?.videoId
          })
          // await db.insert(ChapterList).values({

          // })
          setLoading(false);

        } catch (e) {
          setLoading(false);
          console.log(e);
        }
      }
    })
  }
  return (
    <div className='mt-10 px-7 md:px-20 lg:px-44'>
      <h2 className='font-bold text-center text-2xl'>Course Layout</h2>

      <LoadingDialogue loading={loading}/>


      {/* Basic Info */}
      <CourseBasicInfo course = {course} refreshData={()=>GetCourse()}/>

      {/* Course Details  */}
      <CourseDetail course = {course}/>

      {/* List Of Lesson  */}
      <ChapterList course = {course} refreshData={()=>GetCourse()}/>

      <Button onClick={GenerateChapterContent} className="my-10">Generate Course Content</Button>
    </div>
  )
}

export default CourseLayout
