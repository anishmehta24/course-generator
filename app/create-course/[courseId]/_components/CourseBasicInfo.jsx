import { Button } from '@/components/ui/button';
import Image from 'next/image'
import React, { useState } from 'react'
import { HiOutlinePuzzle } from "react-icons/hi";
import EditCourseBasicInfo from './EditCourseBasicInfo';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '@/configs/firebaseConfigs';
import { db } from '@/configs/db';
import { CourseList } from '@/configs/schema';
import { eq } from 'drizzle-orm';

function CourseBasicInfo({course , refreshData}) {

  const [selectedFile,setSelectedFile] = useState();

  
  const onFileSelected= async(event)=>{
    const file = event.target.files[0];
    setSelectedFile(URL.createObjectURL(file));
    const fileName=Date.now()+'.jpg';

    const storageRef=ref(storage,'courseCurator/'+fileName)
    await uploadBytes(storageRef,file).then((snapshot)=>{
      console.log("upload file completed")
    }).then(resp=>{
      getDownloadURL(storageRef).then(async(downloadUrl)=>{
        console.log(downloadUrl)
        await db.update(CourseList).set({
          courseBanner:downloadUrl
        }).where(eq(CourseList.id,course?.id))
      })
    })
  }
  return (
    <div className='p-10 border rounded-xl shadow-sm mt-5'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div className=''>
                <h2 className='font-bold text-3xl'>{course?.courseOutput?.course?.name} <EditCourseBasicInfo course={course} refreshData={()=>refreshData(true)}/></h2>
                <p className='text-sm text-gray-400 mt-3'>{course?.courseOutput?.course?.description}</p>
                <h2 className='font-medium mt-2 flex gap-2 items-center text-primary'><HiOutlinePuzzle/>{course?.category}</h2>
                <Button className='w-full mt-5'>Start</Button>
            </div>
            <div>
              <label htmlFor='upload-image'>
                <Image src={ selectedFile?selectedFile:'/placeholder.jpeg'} width={300} height={300} 
                 className='w-full rounded-xl h-[250px] object-cover cursor-pointer'/>
                 </label>
                 <input type="file" id='upload-image' className='opacity-0' onChange={onFileSelected}/>
            </div>
        </div>
        
    </div>
  )
}

export default CourseBasicInfo