import { BellRing, CircleUser, Search } from 'lucide-react'
import React from 'react'

export const Navbar = () => {
    return (
        <header className='px-6 py-2'>
            <div className='flex flex-row items-center justify-between  '>
                <div className='flex gap-2 ' >
                    <span className='text-[13px] font-bold  text-gray-400'>Home</span>
                    <span className='text-[13px] font-semibold text-slate-400'>&gt;</span>
                    <span className='text-sm font-bold text-slate-600'>Dashboard V2</span>
                </div>
                <div className='relative flex items-center'>
                    <input
                        type="text"
                        placeholder='Search Anything'
                        className='border-blue-200 border-2 outline-none px-10 py-1 w-96 rounded-md text-sm'
                    />
                    <Search
                        className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400'
                    />
                </div>
                <div className='flex items-center gap-10'>
                    <BellRing className='h-5 w-5 text-slate-500' />
                    <CircleUser className='h-5 w-5 text-slate-500' />
                </div>
            </div>
        </header>
    )
}
