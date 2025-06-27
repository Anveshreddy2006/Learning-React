import './App.css'
//import './index.css'
import { useState, useCallback ,useEffect, useRef} from 'react';
function App() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");


  //useRef hook
  const passwordRef = useRef(null);
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if (numberAllowed) str += "0123456789";

    if (charAllowed) str += "!@#$%^&*()_+[]{}|;:,.<>?";

    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length) + 1;
      pass += str.charAt(char);
    }

    setPassword(pass);

  }, [length, numberAllowed, charAllowed,setPassword]);
 

  const copyPasswordToClipboard = useCallback(() => {

    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999); // For copying range 
    window.navigator.clipboard.writeText(password)

  },[password]);



  useEffect(() => {
    passwordGenerator();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
 
    <>


      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>

        <h1 className="text-4xl font-bold text-center text-white my-3">
          Password Generator
        </h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-gray-800'>
          <input
            type="text"
            value={password}
            className='w-full px-3 py-1 outline-none'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />

          <button onClick ={copyPasswordToClipboard}

          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>


        </div>

        <div className='flex text-sm gap-x-2'>

          <div className='flex items-center gap-x-1'>

             <input type="range" 
             min={6}
             max={100} 
             value={length}
             className='cursor-pointer'
             onChange={(e)=>{
              setLength(e.target.value);
             }}/>

             <label >Length : {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
             <input
            type="checkbox"
            defaultChecked={numberAllowed}
             id="numberInput"
           onChange={() => {
                setNumberAllowed((prev) => !prev);
           }}
            
          />
          <label htmlFor="numberInput">Numbers</label>
          </div>


          <div className='flex items-center gap-x-1'>
             <input
            type="checkbox"
            defaultChecked={charAllowed}
             id="characterInput"
           onChange={() => {
                setCharAllowed((prev) => !prev);
           }}
            
          />
          <label htmlFor="characterInput">Characters</label>
          </div>

        </div>

      </div>
    </>
  )


}

export default App
