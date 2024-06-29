import { useCallback, useState,useEffect, useRef} from 'react'

function App() {
  const [length, setLength] = useState(6);
  const [isNumber,setIsNumber] = useState(false);
  const [ isChar,setIsChar] = useState(false);
  const [passward,setPassward] = useState("");
  const passwardRef= useRef(null)

  const passwardGenerator = useCallback(()=>{
    let pass= ""
     let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(isNumber){ str=str+"1234567890"}
    if(isChar){ str=str+"~!@#$%&*^()_+/?"}
    

    for(let i=1;i<length;i++){
      let char = Math.floor(Math.random() * str.length+1);
      pass += str.charAt(char)
    }
    setPassward(pass);
  },[length,isNumber,isChar,setPassward]);

  const handlePasswardRef = useCallback(()=>{
    window.navigator.clipboard.writeText(passward);
    alert("Password copied");
  },[passward])

  useEffect(()=>{
    passwardGenerator()
  },[length,isChar,isNumber,passwardGenerator]);

  return (
    <>
    
      <div className='w-full max-w-md mx-auto shodow-md rounnded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center'> password generator</h1>
        <div className='flex shodow rounded-lg overflow-hidden mb-4'>
          <input type='text'
          value={passward}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          ref={passwardRef}
          readOnly/>
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={handlePasswardRef} >copy </button>
  
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
            type='range' 
            min={6}
            max={30}
            value={length}
            className='cursor-pointer' 
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
            type='checkbox'
            defaultChecked={isNumber}
            id="numberInput"
            onChange={()=>{setIsNumber((perv)=>!perv);}}
            />
            <label htmlFor='numberInnput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
            type='checkbox'
            defaultChecked={isChar}
            id="charInput"
            onChange={()=>{setIsChar((perv)=>!perv);}}
            />
            <label htmlFor='charInnput'>Characters</label>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
