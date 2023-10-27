import {useState,useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Front(){
const [ID, setID] = useState();
const navigate = useNavigate();

function handleChange(event){
  setID(event.target.value);
}
async function handleSearch(event){
  const result = await fetch(`http://127.0.0.1:8000/view?id=${ID}`);
  const data = await result.json();
  console.log(data)
  navigate('/view',{state:{data}})
}
return(
  <div className='flex flex-col h-screen'>
    <div className='flex flex-row'>
    <div className='flex  justify-end p-4'><Link to="/" className="border-solid bg-teal-700 hover:bg-cyan-500 text-white py-2 font-bold px-8 rounded">Home</Link></div>
    <div className='flex justify-end p-4 '><Link to="/Issue" className="border-solid bg-teal-700 hover:bg-cyan-500 text-white font-bold py-2 px-8 rounded">Issue Certificate</Link></div></div>
    <div className="flex flex-col justify-center items-center h-screen text-center">
        <h1 className="text-3xl font-bold text-center mb-8">
      Certificate Dapp
    </h1><br></br>
    <input
        className="border-2 border-teal-700 focus:border-cyan-500 outline-none mb-6 py-2 px-8 rounded"
        type="text"
        value={ID}
        onChange={handleChange}
        placeholder="Enter text here"
        
      />
      <button onClick={handleSearch} className='border-solid bg-teal-700 font-bold hover:bg-cyan-500 text-white py-2 px-8 rounded'>Search</button>
    </div>
    </div>
    
)
}
