import { BellRing, CircleUser } from 'lucide-react'
import React from 'react'

export const Navbar = () => {
  return (
    <header className='px-2 py-1'>
        <div className='flex flex-row  items-center '>
            <div className='flex gap-2'>
                <span>Home</span>
                <span>&gt;</span>
                <span>Dashboard</span>
            </div>
            <div>
                <input type="search" name="" id="" />
            </div>
            <div>
                <BellRing className='h-6 w-6'/>
                <CircleUser className='h-6 w-6'/>
            </div>
        </div>
    </header>
  )
}
