import userImg from '../assets/userImg.png'
import ChatgptImg from '../assets/chatgptImg.jpg'

type props={
  key:number
  data:{
    user:string
    message:string
  }
  isLightMode:boolean
}

const ChartCard = ({data ,isLightMode}:props) => {
  return (
    <div className='w-full'>
     <div className='w-full flex space-x-4'>
        {
          data.user === 'me' &&
         (
          <div className='flex space-x-3 px-8 md:px-48 my-3'>
             <div className='w-10 h-10 rounded-lg'>
                <img src={userImg} alt="chat gpt logo" className='h-full w-full' />
              </div>
              <div className='flex-1'>
                <p>{data.message}</p>
              </div>
          </div>
         )}
         { data.user === 'gpt' &&
         (
          <div className={`${isLightMode && 'bg-gray-200'} bg-gray-700 px-8 py-4 md:px-48 my-3 w-full flex items-center space-x-3`}>
            <div className="w-10 h-10 rounded-lg ">
              <img src={ChatgptImg} alt="chat gpt logo" className='w-full h-full' />
            </div>
            <div className='flex-1'>
              <p>{data.message}</p>
            </div>
          </div>
         )
        }
     </div>
    </div>
  )
}

export default ChartCard