import { useState } from "react"

function App() {
  const [color, setColor] = useState("Pink")

  return (
    <div
      className="w-full h-screen duration-300"
      style={{ backgroundColor: color }}
    >
      <div className="fixed bottom-12 inset-x-0 flex justify-center">
        <div className="flex gap-3 bg-white px-4 py-2 rounded-2xl shadow-lg">

          <button
            onClick={() => setColor("red")}
            className="px-4 py-1 rounded-full text-white bg-red-500"
          >
            Red
          </button>

          <button
            onClick={() => setColor("green")}
            className="px-4 py-1 rounded-full text-white bg-green-500"
          >
            Green
          </button>

          <button
            onClick={() => setColor("blue")}
            className="px-4 py-1 rounded-full text-white bg-blue-500"
          >
            Blue
          </button>

          <button
            onClick={() => setColor("yellow")}
            className="px-4 py-1 rounded-full text-white bg-yellow-400"
          >
            Yellow
          </button>

          <button
            onClick={() => setColor("#808000")}
            className="px-4 py-1 rounded-full text-white bg-lime-700"
          >
            Olive
          </button>

        </div>
      </div>
    </div>
  )
}

export default App

