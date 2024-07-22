import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
 

  return (
    <>
    <h1 className='text-3xl bg-green-500'>Vite with Tailwind</h1>
    <Card username="Raj" post='Software Engineer'/>
    <Card/>
    <Card/>
    </>
  )
}

export default App
