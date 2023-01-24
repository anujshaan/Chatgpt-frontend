import React,{ useState } from 'react'
import MainContent from '../components/MainContent'
import Sidebar from '../components/Sidebar'

type IinitialState = {
  user:string,
  message:string
}

const Home = () => {
  const [isLightMode ,setIsLightMode] = useState(false)
  const [chatLog, setChatLog] = React.useState<IinitialState[]>([]);
  return (
    <div className='h-full w-full flex text-white'>
      <Sidebar isLightMode={isLightMode} setIsLightMode={setIsLightMode} setChatLog={setChatLog}/>
      <MainContent isLightMode={isLightMode} setChatLog={setChatLog} chatLog={chatLog}/>
    </div>
  )
}

export default Home