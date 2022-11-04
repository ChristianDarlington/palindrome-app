import React, {useState} from 'react';
import './App.css';


function App() {

  const [success, setSuccess] = useState(false)
  const [fail, setFail] = useState(false)

  let palendrome = []
  let input;
    
  const handleInput = (e) => {
     input = e.target.value
    console.log(input) 
  }

  const reverseWord = (value) => {
    for (let i = value.length - 1 ; i > -1; i--) {
      const elem = value[i];
      palendrome.push(elem)
    }
  }

  const concatWord = () => {
    palendrome = palendrome.join('')
  }

  const confirmMatch = () => {
    if(input === palendrome){
      setSuccess(true)
      return 
    } 
      setFail(true)
  }


  const clearPalendrome = () => {
    palendrome = []
  }


  const resetForm = () => {
    if(fail || success) {
      setSuccess(false)
      setFail(false)
    }
  }

  const checkIfPalindrome = (value) => {
    resetForm()
    reverseWord(value)
    concatWord()
    confirmMatch()
    clearPalendrome()
  }

  return (
    <div className="App">
      <div className='main'>
      <div className='input-area'>
        <input type='text' onChange={(e) => handleInput(e)}/>
       <button onClick={() => checkIfPalindrome(input)}>Submit </button>
      </div>
         {success && <div className='success'>That's a Palindrome</div>}
         {fail && <div className='fail'>That's not a Palindrome</div>}  
      </div>
    </div>
  );
}

export default App;
