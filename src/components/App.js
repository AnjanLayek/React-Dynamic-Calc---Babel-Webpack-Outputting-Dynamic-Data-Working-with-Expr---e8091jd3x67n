import React,{useState,useEffect} from 'react'
import '../styles/App.css';
const App = () => {
   const [input1,setInput1] = useState('');
   const [input2,setInput2] = useState('');
   const [result,setResult] = useState(0);
   
   const firstInput = (e) => {
    setInput1(e.target.value);

   }
   const secondInput = (e)=>{
  setInput2(e.target.value);

   }
   useEffect(()=>{
    setResult(Number(input1) + Number(input2))
   },[input1,input2]);
   
  return (
    <div id="main">
      <input id='input1' onChange={firstInput} value={input1} />
       +
      <input id='input2' onChange={secondInput} value={input2}/> 
      
      <p id='result'>{result}</p>
    </div>
  )
}


export default App;
