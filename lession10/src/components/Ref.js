import React, { useRef, useState } from 'react'

function Ref() {
    const [count,setCount] = useState(60);
    const timer = useRef();
    const handleStart = ( )=>{
        timer.current=setInterval(()=>{
            setCount(preCount => preCount-1)
        },1000)
        console.log('start',timer.current)
    }
    const handleStop = () => {
   clearInterval(timer.current)
      console.log("stop", timer.current);
    };
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  )
}

export default Ref
