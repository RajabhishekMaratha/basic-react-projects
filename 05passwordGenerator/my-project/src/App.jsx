import { useState, useCallback, useEffect, useRef } from 'react'

import './App.css'

function App() {
  const [lenght, setLenght] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordRef = useRef(null)

  const generatePassword = useCallback(() =>{
    let pass =''
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()_+"

    for(let i=1; i<lenght; i++){
      const char = Math.floor(Math.random()* str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [lenght, numberAllowed, charAllowed])

  const copyPasswordToClickboard = () =>{
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  } 
  useEffect(() => {generatePassword()}, [lenght, numberAllowed, charAllowed])
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
            
        />
        <button
        onClick={copyPasswordToClickboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
      </div> 
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
          type="range"
          min={6}
          max={17}
          value={lenght}
          className='cursor-pointer'
          onChange={(e) => setLenght(e.target.value)}
          name=''
          id=''
          />
          <label htmlFor='lenght'>LEnght: {lenght}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
          type="checkbox"
          onChange={()=> {
            setNumberAllowed((prev) => !prev)
          }}
          name=''
          id=''
          />
          <label htmlFor='number'>Numbers {Number}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
          type="checkbox"
          defaultChecked={charAllowed}
          onChange={()=> {
            setCharAllowed((prev) => !prev)
          }}
          name=''
          id=''
          />
          <label htmlFor='charInput'>Character </label>
        </div>
        </div>
    </div>
  )
}

export default App
