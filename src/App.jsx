import { useCallback, useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
function App() {
  const [length, setLength] = useState(6);
  const [isNumber, setIsNumber] = useState(false);
  const [isChar, setIsChar] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const notify = () => toast('Password Copied! 👍');

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
    // alert("Password copied to clipboard!");
    notify()
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
    <Toaster />
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
          <div className='flex justify-between items-center'>
          <motion.label
            className="block text-md mt-4 font-medium mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Password Length: {length}
          </motion.label>
          <button onClick={()=>passwordGenerator()} className=' text-orange-400 bg-gray-700 text-sm my-2 p-2 rounded-md'>Generate New Password</button>
          </div>
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

