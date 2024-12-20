'use client'
import { Button } from '@/components/ui/button';
import React, { useContext, useState } from 'react'
import { BiSolidCategory } from "react-icons/bi";
import { IoOptionsSharp } from "react-icons/io5";
import { MdOutlineTopic } from "react-icons/md";
import SelectCategory from './_components/SelectCategory';
import TopicDesc from './_components/TopicDesc';
import SelectOption from './_components/SelectOption';
import { UserInputContext } from '../_context/UserInputContext';
import { GenerateCourseLayout_AI } from '@/configs/AiModel';
import LoadingDialogue from './_components/LoadingDialogue';
import { db } from '@/configs/db';
import { CourseList } from '@/configs/schema';
import uuid4 from 'uuid4';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

function CreateCourse() {
    const StepperOptions = [
        {
          id:1,
          name: "Category",
          icon: <BiSolidCategory/>
        },
        {
          id:2,
          name: "Topic & Desc",
          icon: <MdOutlineTopic/>

        },
        {
          id:3,
          name: "Options",
          icon: <IoOptionsSharp/>

        },
]

const [activeIndex,setActiveIndex] = useState(0);
const {userCourseInput,setUserCourseInput} = useContext(UserInputContext);
const [loading,setLoading] = useState(false);
const {user} = useUser();
const router = useRouter();

const checkStatus = ()=>{
    if(userCourseInput?.length==0)
    {
        return true;
    }
    if(activeIndex==0 && (userCourseInput?.category?.length==0 || userCourseInput?.category == undefined))
    return true;

    if(activeIndex==1 && (userCourseInput?.topic?.length==0 || userCourseInput?.topic == undefined)){
        return true;
    }
    else if(activeIndex==2 && (userCourseInput?.level == undefined || userCourseInput?.duration == undefined || userCourseInput?.displayVideo == undefined
        || userCourseInput?.noOfChapters == undefined
    )){
        return true;
    }
    return false;
}

    let i = 1;

const GenerateCourseLayout = async()=>{
    setLoading(true);
    console.log(i++);
    const BASIC_PROMPT='Generate a course tutorial on following Detail with field as course name,description,along with chapter name,About,Duration:'
    const USER_INPUT_PROMPT='Category: '+userCourseInput?.category+',Topic: '+userCourseInput?.topic+',Level: '+userCourseInput?.level+',Duration: '+userCourseInput?.duration+', NoOfChapters: '+userCourseInput.noOfChapters+', in JSON forma' 
    const FINAL_PROMT = BASIC_PROMPT+USER_INPUT_PROMPT;
    console.log(FINAL_PROMT);
    const result = await GenerateCourseLayout_AI.sendMessage(FINAL_PROMT);
    console.log(result.response?.text());
    console.log(JSON.parse(result.response?.text())) ;
    //console.log(process.env.NEXT_PUBLIC_DB_CONNECTION_STRING);
    setLoading(false);
    SaveCourseLayoutInDb(JSON.parse(result.response?.text()))
}

const SaveCourseLayoutInDb = async (courseLayout)=>{
    var id = uuid4();
    setLoading(true)
    const result = await db.insert(CourseList).values({
        courseId:id,
        name:userCourseInput?.topic,
        level:userCourseInput?.level,
        category:userCourseInput?.category,
        courseOutput:courseLayout,
        createdby:user?.primaryEmailAddress?.emailAddress,
        userName:user?.fullName,
        userProfileImage:user?.imageUrl
    })
    console.log("finish");
  
    setLoading(false);
    router.replace('/create-course/'+id)
}

  return (
    <div>
       
        <div className='flex flex-col justify-center items-center mt-10'>
            <h2 className='text-4xl text-primary font-medium'>Create Course</h2>
            <div className='flex mt-5'>
                {StepperOptions.map((item,index)=>(
                    <div className='flex items-center'>
                        <div className='flex flex-col items-center w-[50px] md:w-[100px]'>
                            <div className={`bg-gray-200 p-3 rounded-full text-white ${activeIndex>=index && 'bg-purple-500'}`}>
                            {item.icon}
                            </div>
                            <h2 className='hidden md:block md:text-sm'>{item.name}</h2>  
                       
                        </div>
                      
                           
                       {index!=StepperOptions.length-1 && 
                        <div className={`h-1 w-[50px] md:w-[100px] rounded-full lg:w-[170px] bg-gray-300
                        ${activeIndex-1>=index && 'bg-purple-500'}
                        `}></div> }
                    </div>
                ))}
            </div>
        </div>

        <div className='px-10 md:px-20 lg:px-44'>
        {/* component */}
        {activeIndex==0?<SelectCategory/>:
        activeIndex==1?<TopicDesc/>:
       <SelectOption/>}
        {/* NextButton */}

        <div className='flex justify-between mt-5 p-5'>
            <Button disabled={activeIndex==0} variant = 'outline' onClick={()=>setActiveIndex(activeIndex-1)}>Previous</Button>
           {activeIndex < StepperOptions.length-1 &&  <Button disabled={checkStatus()} onClick={()=>setActiveIndex(activeIndex+1)}>Next</Button> }
          {activeIndex == StepperOptions.length-1 &&  <Button disabled={checkStatus()} onClick={()=>GenerateCourseLayout()}>Generate Course Layout</Button> }
        </div>
        </div>
        <LoadingDialogue loading={loading}/>
    </div>
  )
}

export default CreateCourse