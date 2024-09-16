import { UserInputContext } from '@/app/_context/UserInputContext';
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React, { useContext } from 'react'

function TopicDesc() {

    const {userCourseInput,setUserCourseInput} = useContext(UserInputContext);
    const handleInputChange = (fieldName,value)=>{
        setUserCourseInput(prev=>({
            ...prev,
            [fieldName]:value
        }))
    }
  return (
    <div className='mx-20 lg:mx-44 mt-10'>
        {/* TOpic */}
        <div className='mt-5'>
            <label > Write the topic for which you want to generate a course </label>
            <Input placeholder={'Topic'} className='h-14 text-lg'
            defaultValue={userCourseInput?.topic}
            onChange={(e)=> handleInputChange('topic',e.target.value)}/>
        </div>
        {/* text area  */}
        <div className='mt-5'>
            <label >Tell Us more what you want to include in the course</label>
            <Textarea placeholder={'Add Description'} className="h-24 text-lg"
              defaultValue={userCourseInput?.description}
            onChange={(e)=> handleInputChange('description',e.target.value)}/>
        </div>
    </div>
  )
}

export default TopicDesc