import { useState } from 'react'
import {nanoid} from 'nanoid'
import Die from './Die'
export default function App(){
  const [dice, setDice] = useState(() => generateAllDie())

  function generateAllDie() {
    return new Array(10)
                .fill(0)
                .map(() => Math.floor(Math.random() * 6) + 1)
  }

  console.log(dice)

  return (
    <main>
      <h1>Tenzies</h1>
      <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <section className='dice-container'>
        {dice.map(value => <Die key={nanoid()} value={value}></Die>)}
      </section>
      <button type='submit' className="roll-btn">Roll</button>
    </main>
  )
}
