import { Circle } from 'lucide-react'
import React from 'react'

const Feedback = () => {
  return (
    <div className="flex flex-col gap-6 bg-white w-96">
      {/* Key Insights & Feedback  */}
      <div className="p-6 border rounded-2xl flex flex-col gap-5 shadow-sm">
        <span className="text-black text-lg">Key Insights & Feedback</span>
        <div className="flex justify-between border-b items-cente pb-4">
          <div className="flex flex-col">
            <span className="text-4xl text-black">10%</span>
            <span className='text-gray-500 text-md'>Sales Growth</span>
          </div>
          <div className='flex flex-col items-center gap-1'>
            <img src={"avatar.png"} />
            <div className='border-2 border-blue-400 bg-blue-100 rounded-4xl'>

            <span className='text-sm text-blue-600 px-1'>Top Perfomer</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-3 p-3 bg-gray-100 rounded-2xl">
          <span className="text-lg text-black">Feedback</span>
          <div className="flex items-baseline gap-3 ">
            <Circle size={16} className="text-gray-400" />
            <span className="text-gray-400 text-md">Franchisees are requesting more detailed training materials.</span>
          </div>
        </div>
      </div>
      {/* Prospect Leads  */}
      <div className="p-6 border rounded-2xl shadow-sm">

        <span className='text-lg text-black'>Prospect Leads</span>
        <div className='flex flex-col gap-3 text-black mt-3'>
            <div className='flex justify-between p-3 items-center bg-gray-100 rounded-2xl'>
                <div className='flex gap-2 items-center'>
                    <img src={"user1.png"} />
                    <span>Wade Warren</span>
                </div>
                <span>Stage : Initial Inquiry</span>
            </div>
            <div className='flex justify-between p-3 items-center bg-gray-100 rounded-2xl'>
                <div className='flex gap-2 items-center'>
                    <img src={"user1.png"} />
                    <span>Ava Wright</span>
                </div>
                <span>Stage : Initial Inquiry</span>
            </div>
            <div className='flex justify-between p-3 items-center bg-gray-100 rounded-2xl'>
                <div className='flex gap-2 items-center'>
                    <img src={"user1.png"} />
                    <span>Cody Fisher</span>
                </div>
                <span>Stage : Initial Inquiry</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Feedback