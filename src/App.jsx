import {nanoid} from 'nanoid'
import { useState, useEffect } from 'react'
import Confetti from 'react-confetti'
import Die from './Die'

export default function App(){
  // callback function for lazy initialization otherwise generateAllDie will run at every re-render (Althogh it won't re-initialize dice)
  const [dice, setDice] = useState(() => generateAllDie())
  const [windowDimensions, setWindowDimensions] = useState({
			width: window.innerWidth,
			height: window.innerHeight,
		})


    // Needed since react-confetti fails to render properly when window dimensions change
    useEffect(() => {
      window.addEventListener("resize", ()=>{
        setWindowDimensions({
          width: window.innerWidth,
			    height: window.innerHeight,
        })
      })
    }, [])

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

  const gameWon = dice.every(die => die.isHeld) &&
    dice.every(die => die.value === dice[0].value)

  // Toggle isHeld state when user clicks on a die
  function toggleHold(id) {
    setDice(prevDice => prevDice.map(die => 
      die.id === id ? {...die, isHeld: !die.isHeld } : die
    ))
  }

  // Randomize each non-held state
  function handleClick() {
    gameWon ? setDice(generateAllDie):
    setDice(prevDice => prevDice.map(die => (
      die.isHeld ? die : {...die, value: Math.floor(Math.random() * 6) + 1}
    )))
    
  }


  gameWon && console.log("Game Won!")
  return (
    <main>

      {gameWon && <Confetti width={windowDimensions.width} height={windowDimensions.height}/>}

      <h1>Tenzies</h1>
      <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <section className='dice-container'>
        {dice.map(die => <Die key={die.id} dieObj={die} handleToggle={() => toggleHold(die.id)}></Die>)}
      </section>
      <button type='submit' className="roll-btn" onClick={handleClick}>{gameWon ? "Reset" : "Roll"}</button>
    </main>
  )
}
