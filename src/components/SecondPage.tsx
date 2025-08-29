import React from 'react'
import Heading from './Heading'
import SearchBar from './SearchBar'
import DocumentTable from './DocumentTable'

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