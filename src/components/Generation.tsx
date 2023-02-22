import React from 'react'

import './Generation.css'
type Props = {
  handleGeneration: (gen: number) => void
}

const Generation = ({ handleGeneration }: Props) => {

  return (
    <nav className='nav'>
      <div onClick={() => handleGeneration(1)}>Gen 1</div>
      <div onClick={() => handleGeneration(2)}>Gen 2</div>
      <div onClick={() => handleGeneration(3)}>Gen 3</div>
      <div onClick={() => handleGeneration(4)}>Gen 4</div>
      <div onClick={() => handleGeneration(5)}>Gen 5</div>
      <div onClick={() => handleGeneration(6)}>Gen 6</div>
      <div onClick={() => handleGeneration(7)}>Gen 7</div>
    </nav>
  )
}

export default Generation