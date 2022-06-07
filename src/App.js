import React,{useState} from 'react';
import './App.css';

const App = () => {
  const [result,setReusult]=useState("");
  const clickHandeler=(event)=>{
    setReusult(result.concat(event.target.value))
  }
  const cleraDisplay=()=>{
    setReusult("");
  }
  const calculate=()=>{
    setReusult(eval.(result).toString());
  }

  return (
    <div className='calc'>
      <input type='text' placeholder='0' id='answer' value={result} />
      <input type='button' placeholder='9' onClick={clickHandeler} />
      <input type='button' placeholder='8' onClick={clickHandeler} />
      <input type='button' placeholder='7' onClick={clickHandeler} />
      <input type='button' placeholder='6' onClick={clickHandeler} />
      <input type='button' placeholder='5' onClick={clickHandeler} />
      <input type='button' placeholder='4' onClick={clickHandeler} />
      <input type='button' placeholder='3' onClick={clickHandeler} />
      <input type='button' placeholder='2' onClick={clickHandeler} />
      <input type='button' placeholder='1' onClick={clickHandeler} />
      <input type='button' placeholder='+' onClick={clickHandeler} />
      <input type='button' placeholder='-' onClick={clickHandeler} />
      <input type='button' placeholder='*' onClick={clickHandeler} />
      <input type='button' placeholder='/' onClick={clickHandeler} />
      <input type='button' placeholder='%' onClick={clickHandeler} />
      <input type='button' value='clear' className='button button1' onClick={cleraDisplay} />
      <input type='button' value='=' className='button button1' onClick={calculate} />


    </div>
  )
}

export default App;