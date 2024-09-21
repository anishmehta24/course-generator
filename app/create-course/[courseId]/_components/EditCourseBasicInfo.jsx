"use client"
import React, { useEffect, useState } from 'react'
import { BiSolidEdit } from "react-icons/bi";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { DialogClose } from '@radix-ui/react-dialog';
import { Button } from '@/components/ui/button';
import { db } from '@/configs/db';
import { CourseList } from '@/configs/schema';
import { eq } from 'drizzle-orm';
  

function EditCourseBasicInfo({course}) {

    const [name,setName] = useState();
    const [description,setDescription] = useState();

    useEffect(()=>{
        setName(course?.courseOutput?.course?.name);
        setDescription(course?.courseOutput?.course?.description);
    },[course])

    const onUpdateHandler =async ()=> {
        course.courseOutput.course.name=name;
        course.courseOutput.course.description=description;
        const result = await db.update(CourseList).set({
            courseOutput:course?.courseOutput
        }).where(eq(CourseList?.id,course?.id))
        .returning({id:CourseList.id});
        console.log(result);
    }


  return (
    <Dialog>
  <DialogTrigger><BiSolidEdit/></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit the Title and Description</DialogTitle>
      <DialogDescription>
        <div className='mt-3'>
            <label>Course Title</label>
            <Input defaultValue={course?.courseOutput?.course?.name} onChange={(event)=>setName(event?.target.value)}/>
        </div>
       <div>
            <label >Description</label>
            <Textarea className='h-40' defaultValue={course?.courseOutput?.course?.description}
            onChange={(event)=>setdescription(event?.target.value)}/>
       </div>
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
        <DialogClose>
            <Button onClick={onUpdateHandler}>Update</Button>
        </DialogClose>
    </DialogFooter>
  </DialogContent>
</Dialog>

  
  )
}

export default EditCourseBasicInfo