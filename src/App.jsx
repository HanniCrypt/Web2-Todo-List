import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Todo from './components/Todo'
import Button from './components/Button'
import './App.css' 

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-auto flex justify-center'>
      <div className='w-96 h-auto flex flex-col'>
        <Header title="TODO - LIST" />
        <Todo one="Learn React" two="Build a To-Do List" three="Master JavaScript" four="Apply for Jobs"/>
        <Button add="Add" del="Delete"/>
      </div>    
    </div>
  )
}

export default App
