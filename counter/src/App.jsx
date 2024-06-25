import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [ state, setState] = useState(0)
  let handleIncrement = () => {
    if (state === 20) {
      setState(0)
    } else {
        setState(()=>state + 1);
    }
  };

  function handleDecrement() {
    if(state<=0){
      setState(0);
    }else{
      setState(()=>state-1);
  }
}


  return (
    <>
      <h1>Count: {state} </h1>
      <button onClick={handleIncrement}> Increment </button>
      <button onClick={handleDecrement}> Decrement </button>
    </>
  )
}

export default App
