import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
        <div>
          <img class="size-48 shadow-xl rounded-md" alt="" src="https://images.pexels.com/photos/5119801/pexels-photo-5119801.jpeg" />
        </div>
        <div class="flex items-center md:items-start">
          <span class=" font-bold bg-fuchsia-400 p-h-5 rounded-4xl text-1xl font-black">Class Warfare</span>
          <span class="bg-amber-200 font-medium text-sky-500">The Anti-Patterns</span>
          <span class="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
            <span>No. 4</span>
            <span>·</span>
            <span>2025</span>
          </span>
        </div>
      </div>
    </>
  )
}

export default App
