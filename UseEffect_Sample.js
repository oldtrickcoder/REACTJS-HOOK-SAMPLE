import React, { useState }from 'react';

function App() {
const [resourcetype,setResourcetype]=useState('posts')
 
  return (
    <>
<div>
  <button onClick={()=> setResourcetype('posts')}>Posts</button>
  <button onClick={()=> setResourcetype('users')}>Users</button>
  <button onClick={()=> setResourcetype('comments')}>Comments</button>
</div>
<h1>{resourcetype}</h1>
    </>
  );
  }
// this is sample for useefect hook
export default App;

// another sample for Useeffect

import React, { useState, useEffect}from 'react';

function App() {
const [resourcetype,setResourcetype]=useState('posts')
 
useEffect(()=>{
  console.log('render');
})


  return (
    <>
<div>
  <button onClick={()=> setResourcetype('posts')}>Posts</button>
  <button onClick={()=> setResourcetype('users')}>Users</button>
  <button onClick={()=> setResourcetype('comments')}>Comments</button>
</div>
<h1>{resourcetype}</h1>
    </>
  );
  }
// this is sample for useEffect hook
export default App;


// another sample for Useeffect


import React, { useState, useEffect}from 'react';

function App() {
const [resourcetype,setresourcetype]=useState('posts')
 console.log('render');

useEffect(()=>{
  fetch(`http://jsonplaceholder.typicode.com/${resourcetype}`)
  .then(Response=>Response.json())
  .then(json=>console.log(json))
},[resourcetype])


  return (
    <>
<div>
  <button onClick={()=> setresourcetype('posts')}>Posts</button>
  <button onClick={()=> setresourcetype('users')}>Users</button>
  <button onClick={()=> setresourcetype('comments')}>Comments</button>
</div>
<h1>{resourcetype}</h1>
    </>
  );
  }
// this is sample for useEffect hook
export default App;

// ANOTHER ONE USEEFFECT USING FETCH API

import React, { useState, useEffect}from 'react';

function App() {
const [resourcetype,setresourcetype]=useState('posts')
const [items,setitems] = useState([])
 console.log('render');

useEffect(()=>{
  fetch(`http://jsonplaceholder.typicode.com/${resourcetype}`)
  .then(Response=>Response.json())
  .then(json=>setitems(json))
},[resourcetype])


  return (
    <>
<div>
  <button onClick={()=> setresourcetype('posts')}>Posts</button>
  <button onClick={()=> setresourcetype('users')}>Users</button>
  <button onClick={()=> setresourcetype('comments')}>Comments</button>
</div>
<h1>{resourcetype}</h1>
{items.map(item => {
  return <pre>{JSON.stringify(items)}</pre>
})}
    </>
  );
  }
// this is sample for useEffect hook
export default App;


// ANOTHER ONE USEEFFECT  FOR  DOING WINDOW ADD EVENTLISTENER RESIZE

import React, { useState, useEffect}from 'react';

function App() {
const [windowWidth,setwindowWidth]=useState(window.innerWidth)
const handleResize = ()=>{
  setwindowWidth(window.innerWidth)
}


useEffect(()=>{
  window.addEventListener('resize',handleResize)
},[])

  return (
    <>
<div>
{windowWidth}
</div>
    </>
  );
  }
// this is sample for useEffect hook
export default App;

// ANOTHER ONE USEEFFECT FOR DOING RESIZE
