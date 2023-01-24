import React,{ FormEvent, useState} from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'
import axios from 'axios';
import ChartCard from './ChartCard';

type Iprops={
  isLightMode:boolean
  chatLog:any[]
  setChatLog:Function
}



const MainContent = ({isLightMode,chatLog, setChatLog}:Iprops) => {
  const [input, setInput] = useState('');
  

  const handleSubmit = async(e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let chatLogNew = [...chatLog,{ user:"me", message:`${input}`}];
    setChatLog(chatLogNew)
    const sendReq = {
      "message":input
    }
    setInput('')
    const response = await axios.post('https://chatgpt-backend-bwzf.onrender.com',sendReq)

    const chatGptMessage = response.data.choices[0].text

    await setChatLog([...chatLogNew, {user:"gpt",message:chatGptMessage}])

    console.log(chatLog)
  }

  return (
    <div className={`h-screen flex-1 bg-gray-800 ${isLightMode && 'bg-gray-100'} `}>
      <div className='h-full w-full relative flex flex-col'>
        <div className={`flex-1 w-full ${isLightMode && 'text-black'} overflow-y-scroll pb-28 pt-8 `} >
          {
            chatLog.map((data,index)=>(
              <ChartCard key={index} data={data} isLightMode={isLightMode} />
            ))
          }
        </div>
        <div className={`max-w-4xl absolute z-20 left-[50%] translate-x-[-50%] bottom-8 rounded-md w-full mx-auto ${isLightMode && 'bg-gray-100 border border-gray-200 shadow-[0_0_10px_rgba(0,0,0,0.10)]'} bg-slate-700 h-12 `}>
          <form onSubmit={handleSubmit} className={`flex items-center w-full h-full rounded-md ${isLightMode && 'bg-gray-100 text-gray-900'}`}>
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} className='w-full h-full bg-inherit outline-none rounded-md pl-4' />
            <button className='flex items-center space-x-2 px-2'>
              <PaperAirplaneIcon className={`w-5 h-5 ${isLightMode && 'text-gray-700'} shadow-[0_0_15px_rgba(0,0,0,0.10)]`}/>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default MainContent