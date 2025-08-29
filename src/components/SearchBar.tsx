import React from 'react'
import { Search } from 'lucide-react'

const SearchBar = () => {
  return (
    <div className='px-6 py-3 border-b flex justify-between'>
        <div className='border-2 rounded-2xl p-3 flex gap-6 lg:w-[40%] w-[70%]'>
            <Search className='text-gray-700'/>
            <span className='text-gray-500 text-xl'>Search here...</span>
        </div>
        <div className='border-2 rounded-2xl p-3 flex gap-2 items-center'>
            <img src={"filter.png"}/>
            <span className='text-gray-500'>Filters</span>
        </div>
    </div>
  )
}

export default SearchBar