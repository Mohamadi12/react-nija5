import React, { useState } from 'react'

const useMemo = () => {
    const[number,setNumber]=useState(0)
    const[dark, setDark]=useState(false)
    const doubleNumber=slowFunction(number)
    const themeStyle={
        backgroundColor: dark? 'black' : 'white',
        color: dark? 'white' : 'black'
    }
  return (
    <div>
      <input type="number" value={number} onChange={e=>setNumber(parseInt(e.target.value))}/>
      <button onClick={()=>setDark(prevDark=> !prevDark)}>Change Theme</button>
      <div style={ themeStyle }>{ doubleNumber }</div>
    </div>
  )
}

function slowFunction(num){
    console.log('Calling Slow Function')
    for(let i=0;i<1000000000;i++){}
    return num*2
}

export default useMemo
