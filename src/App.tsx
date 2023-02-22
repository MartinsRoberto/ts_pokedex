import { useState, useEffect } from 'react'
import './App.css'
import PokeList from './components/PokeList'
import Generation from './components/Generation'

function App() {
  const [gen, setGen] = useState<number>(1)

  const handleGeneration = (generation: number) => {
    setGen(generation)
  }

  return (
    <div className="App">
      <Generation handleGeneration={handleGeneration} />
      <PokeList gen={gen} />
    </div>
  )
}

export default App
