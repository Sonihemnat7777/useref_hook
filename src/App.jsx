
import { useRef, useState } from 'react'

import './App.css'


function App() {
  const [count,setCount]=useState(0);
  let val = useRef(0);
  let btnRef=useRef();
  function handleClick()
  {val.current=val.current+1;
    console.log("value of val : ", val.current);

    setCount(count+1);
  
  }
  function handleDic()
  {
    val.current=val.current-1;
    console.log("value of val : ", val.current);
    setCount(count -1);
  }
  let x = useRef(0);
  
  function changeColor()
  {
    if(x.current==0)
    {

      btnRef.current.style.backgroundColor="Red";
    x.current=1
    }
    else{
      btnRef.current.style.backgroundColor="";
      x.current=0
    }

  }
  return (
    <>
   <button onClick={handleClick} ref={btnRef}>+</button>
   <br />
   <br />
   <div>
   {count}
   </div>
   <br />
   <button onClick={handleDic} >-</button>
<br />
<br />
<button onClick={changeColor}>Change Color of 1st Button</button>

    </>
  )
}

export default App
