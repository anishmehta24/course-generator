import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import Image from 'next/image'
  

function LoadingDialogue({loading}) {
  return (
    <AlertDialog open={loading}>
  <AlertDialogTrigger></AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
    
      <AlertDialogDescription>
      <div className='flex flex-col items-center py-10'>
        <Image src={'/loader.gif'} width={100} height={100}/>
        <h2>Please wait... Working on generating your course layout</h2>
      </div>
      </AlertDialogDescription>
    </AlertDialogHeader>
 
  </AlertDialogContent>
</AlertDialog>

  )
}

export default LoadingDialogue