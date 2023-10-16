import {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

export default function Front(){
const [text, setText] = useState();
function handleChange(event){
  setText(event.target.value);
}
return(
  <div className='flex flex-col h-screen'>
    <div className='flex flex-row'>
    <div className='flex  justify-end p-4'><Link to="/" className=" border-solid bg-teal-700  hover:bg-cyan-500 text-white px-8 rounded">Home</Link></div>
    <div className='flex justify-end p-4 '><Link to="/Issue" className=" border-solid bg-teal-700  hover:bg-cyan-500 text-white px-8 rounded">Issue Certificate</Link></div></div>
    <div className="flex flex-col justify-center items-center h-screen text-center">
        <h1 className="text-3xl font-bold text-center mb-8">
      Certificate Dapp
    </h1><br></br>
    <input
        className="border-2 border-black mb-6"
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Enter text here"
        
      />
      <button className='border-solid bg-teal-700  hover:bg-cyan-500 text-white px-8 rounded'>Submit</button>
    </div>
    </div>
    
)
}
