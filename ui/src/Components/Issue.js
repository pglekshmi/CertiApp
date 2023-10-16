import {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

export default function Issue(){
    const [ID, setID] = useState();
    const [Name, setName] = useState();
    const [CName, setCName] = useState();
    const [Grade, setGrade] = useState();
    const [Date, setDate] = useState();
    
     
    return(
        <div className='flex flex-col h-screen'>
         <div className='flex flex-col justify-end items-end pr-20 h-screen text-center'>
      <Link to='/' className=' border-solid bg-teal-700  hover:bg-cyan-500 text-white px-8 rounded'>Home</Link>
      </div>

          <p className='justify-center items-center text-3xl font-bold text-center mb-8'>Certificate Details</p>
          
          <div className='flex flex-row  mb-4 pl-20'>
        <p className='text-lg '>Certificate ID:</p>
        <div className='pl-20'>
        <input
        type="text"
        value={ID}
        onChange={(e)=>setID(e.target.value)}
        placeholder="Enter text here"
        className="align-middle"
      /></div>
      </div>
      <div className='flex flex-row mb-4 pl-20'>
        <p className='text-lg'>Candidate Name:</p>
        <div className='pl-14'>
        <input
        type="text"
        value={Name}
        onChange={(e)=>setName(e.target.value)}
        placeholder="Enter text here"
        className="align-middle"
      /></div>
      </div>
      <div className='flex flex-row mb-4 pl-20 '>
        <p className='text-lg ' >Course Name:</p>
        <div className='pl-20'>
        <input
        type="text"
        value={CName}
        onChange={(e)=>setCName(e.target.value)}
        placeholder="Enter text here"
        className="align-middle "
      /></div>
      </div>
      <div className='flex flex-row mb-4 pl-20'>
        <p className='text-lg '>Grade:</p>
        <div className='pl-32'>
        <input
        type="text"
        value={Grade}
        onChange={(e)=>setGrade(e.target.value)}
        placeholder="Enter text here"
        className="align-middle"
      /></div>
      </div>
      <div className='flex flex-row mb-8 pl-20'>
        <p className='text-lg' >Date:</p>
        <div className='pl-32'>
        <input
        type="text"
        value={Date}
        onChange={(e)=>setDate(e.target.value)}
        placeholder="Enter text here"
        className="align-middle"
      /></div>
      
      </div>
      <div className='flex flex-col justify-center items-center h-screen text-center'>
      <button className=' border-solid bg-teal-700  hover:bg-cyan-500 text-white px-8 rounded'>Submit</button>
      </div></div>
    )
}