import { UserButton } from '@clerk/nextjs'
import React from 'react'
import AddCourse from './_components/AddCourse'
import CourseCard from './_components/CourseCard'
import UserCourseList from './_components/UserCourseList'


function Dashboard() {
  return (
    <div>
        {/* <UserButton/> */}
        <AddCourse/>
        {/* Display course lists */}
       <UserCourseList/>
    </div>
  )
}

export default Dashboard