import React, {useState} from 'react';
import './App.css';

function App() {

  let palendrome = []
  let input;
    
  const handleInput = (e) => {
     input = e.target.value
    console.log(input) 
  }

  const reverseWord = (value) => {
    for (let i = value.length - 1; i > -1; i--) {
      const elem = value[i];
      console.log(elem)
      palendrome.push()
    }
  }

  const checkIfPalindrome = (value) => {
    reverseWord(value)
  }

  return (
    <div className="App">
      <div className='main'>
      <div className='input-area'>
        <input type='text' onChange={(e) => handleInput(e)}/>
       <button onClick={() => checkIfPalindrome(input)}>Submit </button>
      </div>
         <div>yaaay!!</div>
      </div>
    </div>
  );
}

export default App;
