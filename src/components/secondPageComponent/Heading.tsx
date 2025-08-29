import React from 'react'
import { Circle } from 'lucide-react'

const Heading = () => {
  return (
    <div className='flex justify-between p-6 border-b'>
        <div className='flex flex-col'>
            <span className='text-black text-3xl font-semibold'>My Uploads</span>
            <span className='text-xl text-gray-500'>Documents that are uploaded by you</span>
        </div>
        <div className='flex flex-col'>
            <Circle size={6} fill='#D9D9D9' className='text-gray-700'/>
            <Circle size={6} fill='#D9D9D9' className='text-gray-700'/>
            <Circle size={6} fill='#D9D9D9' className='text-gray-700'/>
        </div>
    </div>
  )
}

export default Heading