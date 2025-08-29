import React from 'react'
import AccountProgress from './firstPageComponent/AccountProgress'
import Onboard from './firstPageComponent/Onboard'
import Feedback from './firstPageComponent/Feedback'

const FirstPage = () => {
  return (
     <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6">
      <AccountProgress />
      <Onboard />
      <Feedback />
    </div>
  )
}

export default FirstPage