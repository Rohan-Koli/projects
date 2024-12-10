// import { useCallback, useState,useEffect, useRef} from 'react'

// function App() {
//   const [length, setLength] = useState(6);
//   const [isNumber,setIsNumber] = useState(false);
//   const [ isChar,setIsChar] = useState(false);
//   const [passward,setPassward] = useState("");
//   const passwardRef= useRef(null)

//   const passwardGenerator = useCallback(()=>{
//     let pass= ""
//      let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

//     if(isNumber){ str=str+"1234567890"}
//     if(isChar){ str=str+"~!@#$%&*^()_+/?"}
    

//     for(let i=1;i<length;i++){
//       let char = Math.floor(Math.random() * str.length+1);
//       pass += str.charAt(char)
//     }
//     setPassward(pass);
//   },[length,isNumber,isChar,setPassward]);

//   const handlePasswardRef = useCallback(()=>{
//     window.navigator.clipboard.writeText(passward);
//     alert("Password copied");
//   },[passward])

//   useEffect(()=>{
//     passwardGenerator()
//   },[length,isChar,isNumber,passwardGenerator]);

//   return (
//     <>
    
//       <div className='w-full flex flex-col flex-wrap max-w-md mx-auto shodow-md rounnded-lg px-4 my-8 text-orange-500 bg-gray-700'>
//         <h1 className='text-white p-2 m-3 text-2xl font-semibold text-center'> Password Generator</h1>
//         <div className='flex shodow rounded-lg overflow-hidden mb-4'>
//           <input type='text'
//           value={passward}
//           className='outline-none w-full py-1 px-3'
//           placeholder='Password'
//           ref={passwardRef}
//           readOnly/>
//           <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={handlePasswardRef} >Copy </button>
  
//         </div>
//         <div className='flex flex-wrap text-sm gap-x-2'>
//           <div className='flex items-center gap-x-1'>
//             <input
//             type='range' 
//             min={6}
//             max={30}
//             value={length}
//             className='cursor-pointer' 
//             onChange={(e)=>{setLength(e.target.value)}}
//             />
//             <label>Length: {length}</label>
//           </div>
//           <div className='flex items-center gap-x-1'>
//             <input
//             type='checkbox'
//             defaultChecked={isNumber}
//             id="numberInput"
//             onChange={()=>{setIsNumber((perv)=>!perv);}}
//             />
//             <label htmlFor='numberInnput'>Numbers</label>
//           </div>
//           <div className='flex items-center gap-x-1'>
//             <input
//             type='checkbox'
//             defaultChecked={isChar}
//             id="charInput"
//             onChange={()=>{setIsChar((perv)=>!perv);}}
//             />
//             <label htmlFor='charInnput'>Characters</label>
//           </div>
//         </div>
//       </div>
      
//     </>
//   )
// }

// export default App

// import { useCallback, useState, useEffect, useRef } from 'react';

// function App() {
//   const [length, setLength] = useState(6);
//   const [isNumber, setIsNumber] = useState(false);
//   const [isChar, setIsChar] = useState(false);
//   const [password, setPassword] = useState("");
//   const passwordRef = useRef(null);

//   const passwordGenerator = useCallback(() => {
//     let pass = "";
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

//     if (isNumber) str += "1234567890";
//     if (isChar) str += "~!@#$%&*^()_+/";

//     for (let i = 1; i <= length; i++) {
//       let char = Math.floor(Math.random() * str.length);
//       pass += str.charAt(char);
//     }
//     setPassword(pass);
//   }, [length, isNumber, isChar]);

//   const handlePasswordCopy = useCallback(() => {
//     window.navigator.clipboard.writeText(password);
//     alert("Password copied to clipboard!");
//   }, [password]);

//   useEffect(() => {
//     passwordGenerator();
//   }, [length, isChar, isNumber, passwordGenerator]);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-300">
//       <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-lg">
//         <h1 className="text-3xl font-bold text-center text-orange-400 mb-6">
//           Password Generator
//         </h1>

//         <div className="flex items-center mb-4 bg-gray-700 rounded-lg shadow">
//           <input
//             type="text"
//             value={password}
//             ref={passwordRef}
//             readOnly
//             className="w-full px-4 py-2 bg-gray-700 text-gray-200 outline-none rounded-l-lg"
//           />
//           <button
//             className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition"
//             onClick={handlePasswordCopy}
//           >
//             Copy
//           </button>
//         </div>

//         <div className=" font-semibold mb-6">
//           <label className="block text-md font-medium mb-2">Password Length: {length}</label>
//           <input
//             type="range"
//             min={6}
//             max={30}
//             value={length}
//             onChange={(e) => setLength(e.target.value)}
//             className="w-full h-2 bg-gray-600 rounded-lg cursor-pointer appearance-none accent-orange-500"
//           />
//         </div>

//         <div className="space-y-4 text-md font-semibold">
//           <label className="flex items-center gap-2">
//             <input
//               type="checkbox"
//               checked={isNumber}
//               onChange={() => setIsNumber((prev) => !prev)}
//               className="form-checkbox text-orange-500"
//             />
//             Include Numbers
//           </label>
//           <label className="flex text-md font-semibold items-center gap-2">
//             <input
//               type="checkbox"
//               checked={isChar}
//               onChange={() => setIsChar((prev) => !prev)}
//               className="form-checkbox text-orange-500"
//             />
//             Include Special Characters
//           </label>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import { useCallback, useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

function App() {
  const [length, setLength] = useState(6);
  const [isNumber, setIsNumber] = useState(false);
  const [isChar, setIsChar] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (isNumber) str += "1234567890";
    if (isChar) str += "~!@#$%&*^()_+/";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, isNumber, isChar]);

  const handlePasswordCopy = useCallback(() => {
    window.navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, isChar, isNumber, passwordGenerator]);

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-3xl font-bold text-center text-orange-400 mb-6"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Password Generator
        </motion.h1>

        <motion.div
          className="flex items-center mb-4 bg-gray-700 rounded-lg shadow"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <input
            type="text"
            value={password}
            ref={passwordRef}
            readOnly
            className="w-full px-4 py-2 bg-gray-700 text-gray-200 outline-none rounded-l-lg"
          />
          <motion.button
            className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition"
            onClick={handlePasswordCopy}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Copy
          </motion.button>
        </motion.div>

        <div className="font-semibold mb-6">
          <motion.label
            className="block text-md font-medium mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Password Length: {length}
          </motion.label>
          <motion.input
            type="range"
            min={6}
            max={30}
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full h-2 bg-gray-600 rounded-lg cursor-pointer appearance-none accent-orange-500"
            whileHover={{ scale: 1.05 }}
          />
        </div>

        <div className="space-y-4 text-md font-semibold">
          <motion.label
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <input
              type="checkbox"
              checked={isNumber}
              onChange={() => setIsNumber((prev) => !prev)}
              className="form-checkbox text-orange-500"
            />
            Include Numbers
          </motion.label>
          <motion.label
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <input
              type="checkbox"
              checked={isChar}
              onChange={() => setIsChar((prev) => !prev)}
              className="form-checkbox text-orange-500"
            />
            Include Special Characters
          </motion.label>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default App;

