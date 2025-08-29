import React from 'react'
import Heading from './secondPageComponent/Heading'
import SearchBar from './secondPageComponent/SearchBar'
import DocumentTable from './secondPageComponent/DocumentTable'

const SecondPage = () => {
  return (
    <div className="my-7 border-2 rounded-2xl flex flex-col">
      <Heading />
      <SearchBar />
      <div className="overflow-x-auto">
        <DocumentTable />
      </div>
    </div>
  )
}

export default SecondPage