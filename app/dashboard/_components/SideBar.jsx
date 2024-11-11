'use client'
import Image from 'next/image'
import React, { useContext } from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { GoStack } from "react-icons/go";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Progress } from '@/components/ui/progress';

import { UserCourseListContext } from '@/app/_context/UserCourseListContext';

function SideBar() {

  const {userCourseList,setUserCourseList} = useContext(UserCourseListContext);
  const Menu = [
    {
      id:1,
      name:'All Course',
      icon:<IoHomeOutline />,
      path:'/dashboard/explore'

    },
    {
      id:2,
      name:'My Courses',
      icon:<GoStack/>,
      path:'/dashboard'

    },
    {
      id:3,
      name:'Upgrade',
      icon:<IoShieldCheckmarkOutline />,
      path:'/dashboard/'

    },
    {
      id:4,
      name:'Logout',
      icon:<IoMdLogOut/>,
      path:'/dashboard/'

    },

    
   
  ] 
  const path = usePathname();
  return (
    <div className='fixed h-full md:w-64 p-5 shadow-md'>
      <Image src={'/logo.png'} alt='image' width={100} height={100}/>
      <hr className='my-5'/>
      <ul>
       

        {Menu.map((item,index)=>(
           <Link href={item.path}>
          <div className={`flex items-center gap-2 text-gray-600 p-3 cursor-pointer hover:bg-gray-100 hover:text-black rounded-lg ${item.path==path&&'bg-gray-100 text-black'} mb-3`}>
            <div className='text-2xl'>{item.icon}</div>
            <h2>{item.name}</h2>
          </div>
          </Link>
        ))}
        
      </ul>

      <div className='absolute bottom-10  w-[80]'>
        <Progress value = {(userCourseList?.length/5)*100}/>
        
        <h2 className='text-sm my-2'>{userCourseList?.length} out of 5 courses completed</h2>
        <h2 className='text-xs text-gray-500'>Upgrade your plan for unlimited course creation</h2>

       
      </div>
    </div>
  )
}

export default SideBar