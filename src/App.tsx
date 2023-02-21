import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import PokeList from './components/PokeList'
import Generation from './components/Generation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Generation />
      <PokeList gen={1} />
    </div>
  )
}

export default App
