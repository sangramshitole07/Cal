import { useState } from 'react'

import './App.css'

function App() {
 const[ num1,setNum1]=useState('');
 const[num2,setNum2]=useState('');
 const[result, setResult]=useState(null);

 const handleOperation=(operator)=>{
  const a=parseFloat(num1);
  const b=parseFloat(num2);

  if(isNaN(a) || isNaN(b)){
    
    setResult('Please Enter a valid number');
    
    return;

  }
  let res=0;
   switch (operator){
    case '+':
      res= a+b;
      break;
    case '-':
      res=a-b;
      break;
    case '*':
      res=a*b;
      break;
    case '/':
      res=b!==0?a/b:'Cannot divide by zero';
      break;
    default:
      res='Invalid Operatpor';
   }

   setResult(res);
 };
  return (
    <div className='App'>
      <h1> React Calculator</h1>
      <div className="calculator">
        <input 
        type ="number"
        value={num1}
        onChange={(e)=> setNum1(e.target.value)}
        placeholder="Enter First Number"
        />
        <input
          type="number"
          value={num2}
          onChange={(e)=>setNum2(e.target.value)}
          placeholder='Enter Second Number'
        />
        <div  className='buttons'>
          <button onClick={()=>handleOperation('+')}> + </button>
          <button onClick={()=>handleOperation('-')}> - </button>
          <button onClick={()=>handleOperation('*')}> x </button>
          <button onClick={()=> handleOperation('/')}> / </button>
        </div>
        <h2><strong>Result : {result}</strong></h2>
      </div>
    </div>
  )
}

export default App
