import {ArrowLeftOnRectangleIcon, ArrowTopRightOnSquareIcon, PlusIcon} from '@heroicons/react/24/solid'
import {SunIcon, TrashIcon,ChatBubbleLeftRightIcon} from '@heroicons/react/24/outline'

type props={
  isLightMode:boolean
  setIsLightMode:Function
  setChatLog:Function
}

const Sidebar = ({isLightMode,setIsLightMode,setChatLog}:props) => {
  return (
    <div className={`h-screen bg-gray-900 md:block md:w-64 hidden `}>
      <div className='p-2 py-4 h-full flex flex-col'>
        <div className='flex-1'>
          <div onClick={()=>setChatLog([])} className='flex items-center border border-gray-700 p-4 rounded-lg space-x-2 cursor-pointer hover:bg-gray-800'>
            <PlusIcon className='w-4 h-4'/>
            <p className='text-sm'>New Chat</p>
          </div>
        </div>
        <div className=' border-t border-gray-700 py-4 px-3 space-y-8 font-light'>
          <div className='flex items-center space-x-3 cursor-pointer'>
            <TrashIcon className='w-4 h-4'/>
            <p className='text-sm'>Clear conversations</p>
          </div>
          <div className='flex items-center space-x-3 cursor-pointer' onClick={()=>setIsLightMode(!isLightMode)}>
            <SunIcon className='w-4 h-4'/>
            <p className='text-sm'>Light Mode</p>
          </div>
          <div className='flex items-center space-x-2 cursor-pointer'>
            <ChatBubbleLeftRightIcon className='w-4 h-4'/>
            <p className='text-sm'>AnujShaan's Discord</p>
          </div>
          <div className='flex items-center space-x-3 cursor-pointer'>
            <ArrowTopRightOnSquareIcon className='w-4 h-4'/>
            <p className='text-sm'>Updates & FAQ</p>
          </div>
          <div className='flex items-center space-x-3 cursor-pointer'>
            <ArrowLeftOnRectangleIcon className='w-4 h-4'/>
            <p className='text-sm'>Logout</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar