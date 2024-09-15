'use client'
import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs'
import React from 'react'

function AddCourse() {

    const {user} = useUser();
  return (
    <div className='flex items-center justify-between'>
        <div>
            <h2 className='text-3xl'> Hello, <span className='font-bold'> {user?.fullName}</span></h2>
            <p className='text-sm text-gray-500'>Create new Courses with AI, share with your friends and Earn from it</p>
            
        </div>
        <Button>+ Create Course</Button>
    </div>
  )
}

export default AddCourse