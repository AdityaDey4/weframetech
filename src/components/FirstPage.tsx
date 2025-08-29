import React from 'react'
import AccountProgress from './firstPageComponent/AccountProgress'
import Onboard from './firstPageComponent/Onboard'
import Feedback from './firstPageComponent/Feedback'

const FirstPage = () => {
  return (
    <div className='flex flex-wrap justify-around gap-10'>
      <AccountProgress />
      <Onboard />
      <Feedback />
    </div>
  )
}

export default FirstPage