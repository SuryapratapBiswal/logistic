import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { FaListUl, FaPlus } from 'react-icons/fa'

const Page = () => {
  return (
    <div>
      <div className="flex justify-between px-4 mb-10 ">
        <div className="flex items-center gap-4">
          <div className="bg-gradient p-4 rounded-md w-14 text-white">
            <FaPlus size={24} />
          </div>
          <div>
            <p className="text-2xl font-bold">Add User</p>
            <p className='text-sm text-gray-500'>Here you can add new user</p>
          </div>
        </div>
        <Link href={'/users'}>
          <Button className="bg-blue-500"><FaListUl />User List</Button>
        </Link>
      </div>

      <div>
        
      </div>
    </div>
  )
}

export default Page