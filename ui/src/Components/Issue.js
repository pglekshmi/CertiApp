import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Issue() {
  const [ID, setID] = useState('');
  const [Name, setName] = useState('');
  const [CName, setCName] = useState('');
  const [Grade, setGrade] = useState('');
  const [Date, setDate] = useState('');
  const [formData, setformData] = useState(null);

  useEffect(() => {
    var jsonData = {
      CertID: ID,
      CandName: Name,
      CourseName: CName,
      Grade: Grade,
      Date: Date,
    };
    console.log(jsonData.CertID);
    setformData(jsonData);
  }, [ID, Name, CName, Grade, Date]);

  async function handleButton() {
    console.log(formData);
    let result = await fetch("http://127.0.0.1:8000/issue", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    });
    console.log(result);
    if (result.status === 201) {
      alert(`${ID} added`);
    } else {
      alert("Check the details");
    }
  }

  return (
        <div className='flex flex-col h-screen'>
          <div className='flex flex-col justify-end items-end pr-20 h-screen text-center'>
            <Link to='/' className='border-solid bg-teal-700 font-bold hover:bg-cyan-500 text-white py-2 px-8 rounded'>Home</Link>
          </div>

          <p className='flex flex-row  mb-4 pl-20 text-3xl font-bold  mb-8'>Enter Certificate Details</p>
          <br />
          <div className='flex flex-row  mb-4 pl-20'>
            <table>
              <tbody>
                <tr>
                  <td><p className='text-lg font-bold'>Certificate ID:</p></td>
                  <td>
                    <div className='pl-20'>
                      <input
                        type="text"
                        value={ID}
                        onChange={(e) => setID(e.target.value)}
                        placeholder="Enter text here"
                        className="border-2 border-teal-700 focus:border-cyan-500 outline-none mb-6 py-2 px-10 rounded"
                      /></div></td>
                </tr>
                <tr>
                  <td><p className='text-lg font-bold'>Candidate Name:</p></td>
                  <td>
                    <div className='pl-20'>
                      <input
                        type="text"
                        value={Name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter text here"
                        className="border-2 border-teal-700 focus:border-cyan-500 outline-none mb-6 py-2 px-10 rounded"
                      /></div></td>
                </tr>
                <tr>
                  <td><p className='text-lg font-bold' >Course Name:</p></td>
                  <td>
                    <div className='pl-20'>
                      <input
                        type="text"
                        value={CName}
                        onChange={(e) => setCName(e.target.value)}
                        placeholder="Enter text here"
                        className="border-2 border-teal-700 focus:border-cyan-500 outline-none mb-6 py-2 px-10 rounded"
                      /></div></td>
                </tr>
                <tr>
                  <td><p className='text-lg font-bold'>Grade:</p></td>
                  <td>
                    <div className='pl-20'>
                      <input
                        type="text"
                        value={Grade}
                        onChange={(e) => setGrade(e.target.value)}
                        placeholder="Enter text here"
                        className="border-2 border-teal-700 focus:border-cyan-500 outline-none mb-6 py-2 px-10 rounded"
                      /></div></td>
                </tr>
                <tr>
                  <td><p className='text-lg font-bold' >Date:</p></td>
                  <td>
                    <div className='pl-20'>
                      <input
                        type="date"
                        value={Date}
                        onChange={(e) => setDate(e.target.value)}
                        placeholder="Enter text here"
                        className="border-2 border-teal-700 focus:border-cyan-500 outline-none mb-6 py-2 px-16 rounded"
                      /></div></td>
                </tr>
              </tbody>
            </table>
          </div>


          <div className='flex flex-col justify-center items-center h-screen text-center'>
            <button onClick={handleButton} className='border-solid bg-teal-700 font-bold hover:bg-cyan-500 text-white py-2 px-8 rounded'>Submit</button>
          </div></div>
        )
}