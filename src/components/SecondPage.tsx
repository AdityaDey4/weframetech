import React from 'react'
import Heading from './secondPageComponent/Heading'
import SearchBar from './secondPageComponent/SearchBar'
import DocumentTable from './secondPageComponent/DocumentTable'

const SecondPage = () => {
  return (
    <div className='m-7 border-2 rounded-2xl'>
      <Heading />
      <SearchBar />
      <DocumentTable />
    </div>
  )
}

export default SecondPage