import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div>
    <div className=' relative flex justify-between p-5 shadow-md'>
        <Image src = {'/logo5.jpg'} width={100} height={100} />
        <Button>Get Started</Button>
    </div>
    </div>
  )
}

export default Header