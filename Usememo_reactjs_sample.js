// USEMEMO REACT SAMPLE

import React, { useState, useEffect}from 'react';

function App() {
const[number, setNumber]=useState(0)
const[dark,setDark]=useState(false)
const doubleNumber = slowFunction(number)
const themestyles = {
  backgroundColor: dark ? 'black' : 'white',
  color: dark ? 'white' : 'black'
}


  return (
    <>
<input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))}></input>
<button onClick={()=> setDark(prevDark=>!prevDark)}>Change Theme</button>
<div style={themestyles}>{doubleNumber}</div>
    </>
  );
  }

function slowFunction(num){
  console.log('Calling Slow Function')
  for(let i=0;i<=100000000;i++){}
  return num*2
}

export default App;

// ANOTHER ONE USEMEMO REACT SAMPLE

import React, { useState, useMemo}from 'react';

function App() {
const[number, setNumber]=useState(0)
const[dark,setDark]=useState(false)
const doubleNumber = useMemo(() =>{
  return slowFunction(number)
},[number])
const themestyles = {
  backgroundColor: dark ? 'black' : 'white',
  color: dark ? 'white' : 'black'
}


  return (
    <>
<input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))}></input>
<button onClick={()=> setDark(prevDark=>!prevDark)}>Change Theme</button>
<div style={themestyles}>{doubleNumber}</div>
    </>
  );
  }

function slowFunction(num){
  console.log('Calling Slow Function')
  for(let i=0;i<=100000000;i++){}
  return num*2
}

export default App;

// ANOTHER ONE USEMEMO REACT SAMPLE

