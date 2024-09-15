import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className='flex justify-between items-center p-5 shadow-sm'>
        <Image src='/logo.png' width={80} height={80}/>
        <UserButton/>
    </div>
  )
}

export default Header