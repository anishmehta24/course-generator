"use client"
import React, { useState } from 'react'
import { IoTrashOutline } from "react-icons/io5";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
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
  

function DropdownOption({children,handleOnDelete}) {

    const [openAlert , setOpenAlert] = useState(false);


    
  return (
    <div>
    <DropdownMenu>
  <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
  <DropdownMenuContent>
    
    
    <DropdownMenuItem onClick={()=>setOpenAlert(true)}>
        <div className='flex items-centre gap-1'><IoTrashOutline/>Delete
            </div></DropdownMenuItem>
    {/* <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem> */}
  </DropdownMenuContent>
</DropdownMenu>

<AlertDialog open={openAlert}>
 
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your course
        and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel onClick={()=>setOpenAlert(false)}>Cancel</AlertDialogCancel>
      <AlertDialogAction onClick={()=>{handleOnDelete();setOpenAlert(false)}}>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

</div>
  )
}

export default DropdownOption