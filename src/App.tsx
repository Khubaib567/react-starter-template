import { useState } from 'react'
import './App.css'

function App(): JSX.Element {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <h1 className='text-bold text-center'>App Page</h1>
    </div>
  )
}

export default App
