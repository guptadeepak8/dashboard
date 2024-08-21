
import { Plus, RefreshCcwIcon, EllipsisVertical, Clock } from 'lucide-react'
export const Headers = () => {
  return (
    <div className='flex justify-between items-center'>
                <span className='text-md font-semibold'>CNAPP Dashboard</span>
                <div className='flex gap-6'>

                    <button className=' flex items-center gap-2 border-2 border-gray-300 rounded-md px-1 py-1 bg-white'>
                        <span className='text-[12px]'>Add widget</span>
                        <Plus className='h-4 w-4' />
                    </button>


                    <button className='p-2 border-2 border-gray-300 rounded-md flex items-center justify-center bg-white'>
                        <RefreshCcwIcon className='h-4 w-4 text-gray-500' />
                    </button>


                    <button className='p-2 border-2 border-gray-300 rounded-md flex items-center justify-center bg-white'>
                        <EllipsisVertical className='h-4 w-4 text-gray-500' />
                    </button>
                    <div className='relative flex items-center '>
                        <Clock className='h-5 w-5 absolute left-2 top-1/2 transform -translate-y-1/2 text-blue-900' />
                        <select name="" id="" className='rounded-md pl-8 py-1 hover:cursor-pointer border border-gray-300 '>
                            <option value="" className='text-blue-900'>Last 2 days</option>
                            <option value="" className='text-blue-900'>Last 7 days</option>
                            <option value="" className='text-blue-900'>Last 15 days</option>
                        </select>
                    </div>
                </div>
            </div>
  )
}
