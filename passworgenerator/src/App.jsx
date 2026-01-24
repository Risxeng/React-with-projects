import { useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)

  return (
    <>
      <h1 className="text-centre text-5xl text"> Password Generator </h1>
    </>
  )
}

export default App
