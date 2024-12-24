import React from "react"
import "./App.css"
import { useState } from 'react';

function HookControlledButtonState()
{
 const ClickHandle=() =>
 {
 setCount(count + 1)
 }
 const [count, setCount] = useState(0);
 return (
 <div className="App-header">
 <form>
 <h1>Click Counts are {count}</h1>
 <button type= "button" onClick={ClickHandle}>Click me{count} </button>
 </form>
 </div>
 );
}
export default HookControlledButtonState