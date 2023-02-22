import { useState, useEffect } from 'react'
import './App.css'
import PokeList from './components/PokeList'
import Generation from './components/Generation'
import PokeDetails from './components/PokeDetails'

function App() {
  const [gen, setGen] = useState<number>(1)
  const [pokeId, setPokeId] = useState<number>(-1)
  const [view, setView] = useState<string>('list')

  const handleGeneration = (generation: number) => {
    setView('list')
    setPokeId(-1)
    setGen(generation)
  }

  const handleSelectPokemon = (id: number) => {
    setView('details')
    setPokeId(id)
  }



  return (
    <div className="App">
      <Generation handleGeneration={handleGeneration} />
      {view === 'list' && <PokeList gen={gen} handleSelectPokemon={handleSelectPokemon} />}
      {view === 'details' && <PokeDetails id={pokeId} />}
    </div>
  )
}

export default App
