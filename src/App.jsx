import {nanoid} from 'nanoid'
import { useState } from 'react'
import Die from './Die'

export default function App(){
  // callback function for lazy initialization otherwise generateAllDie will run at every re-render (Althogh it won't re-initialize dice)
  const [dice, setDice] = useState(() => generateAllDie())


  // Creates a new array of size 10, fills each entry with 0 (initially null, required since otherwise they can't be iterated over) and then iterated over each element to fill them with a random values.
  function generateAllDie() {
    return new Array(10)
      .fill(0)
      .map(() => ({
        value: Math.floor(Math.random() * 6) + 1,
        isHeld: false,
        id: nanoid()
      }))
  }

  // Toggle isHeld state when user clicks on a die
  function toggleHold(id) {
    setDice(prevDice => prevDice.map(die => 
      die.id === id ? {...die, isHeld: !die.isHeld } : die
    ))
  }

  // Randomize each non-held state
  function roll() {
    setDice(prevDice => prevDice.map(die => (
      die.isHeld ? die : {...die, value: Math.floor(Math.random() * 6) + 1}
    )))
    
  }


  return (
    <main>
      <h1>Tenzies</h1>
      <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <section className='dice-container'>
        {dice.map(die => <Die key={die.id} dieObj={die} handleClick={() => toggleHold(die.id)}></Die>)}
      </section>
      <button type='submit' className="roll-btn" onClick={roll}>Roll</button>
    </main>
  )
}
