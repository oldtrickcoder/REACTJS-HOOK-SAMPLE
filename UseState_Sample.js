import React, { useState }from 'react';

function App() {

const [count, setCount] = useState(0)
const [theme,settheme] = useState('kg')

function decrementCount(){
 setCount(prevcount => prevcount -1)
}

function incrementCount(){
  setCount(prevcount=>prevcount+1)
}
 
  return (
    <>
   <button onClick={decrementCount}>-</button>
   <span>{count}</span>
   <span>{theme}</span>
   <button onClick={incrementCount}>+</button>
    </>
  );
  }
// this is sample for usestate hook
export default App;
