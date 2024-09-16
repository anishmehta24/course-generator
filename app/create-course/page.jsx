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
          {activeIndex == StepperOptions.length-1 &&  <Button disabled={checkStatus()} onClick={()=>setActiveIndex(activeIndex+1)}>Generate Course Layout</Button> }
        </div>
        </div>

    </div>
  )
}

export default CreateCourse