import { useState } from 'react'
import {BrowserProvider, Contract}  from 'ethers'

import './App.css'

import cert from './cert.json'

function App() {

  const [formData,setFormData]=useState({
    cid:0,
    cname:'',
    course:'',
    grade:'',
    date:''
  })

  const [output,setOutput] = useState('')
  const connectMetamask =async()=>{

    const provider =await  new BrowserProvider(window.ethereum)
    console.log("Provider",provider);
    const signer = await provider.getSigner();
    console.log("Signer",signer.address);
    
    
  }

  const handleChange = (event)=>{
    const {name,value} = event.target;
    console.log("Name",name);
    console.log("Value",value);
    
    
    setFormData((prev)=>({...prev,[name]:value}))
  }

  const IssueCertificate =async()=>{
     const provider =await  new BrowserProvider(window.ethereum)
    console.log("Provider",provider);
    const signer = await provider.getSigner();
    console.log("Signer",signer.address);

    console.log("Certificate Details",formData);

    const cInstance = new Contract(cert.address,cert.abi,signer);

    const tranHash = await cInstance.issueCertificate(formData.cid,formData.cname,formData.course,formData.grade,formData.date)
    console.log("Transaction Hash",tranHash);
    
    
  }

  const getCertificate =async()=>{

    const certId = document.getElementById("certId").value
    console.log("Certificate Id",certId);
    
     const provider =await  new BrowserProvider(window.ethereum)
    console.log("Provider",provider);
    const signer = await provider.getSigner();
    console.log("Signer",signer.address);

    console.log("Certificate Details",formData);

    const cInstance = new Contract(cert.address,cert.abi,signer);

    const result = await cInstance.Certificates(certId)
    console.log("Result",result);

    setOutput(`Certificate Id:${result[0]}, Candidate Name: ${result[1]}, Course: ${result[2]}, Grade: ${result[3]}, Date: ${result[4]}`)
    
  }
  

  return (
    < div className='m-4'>
    <div>
     <input type='button' value='Connect To Metamask' onClick={connectMetamask} className=' border-2 bg-sky-500 rounded-full border-transparent p-3 '/>
    </div>
    <div>
      <p className='font-bold m-4'>Enter Certificate Details</p>
    
    <div className='flex'>
      <p className='mr-2'>Certificate Id:</p>
      <input type='text' id='cid' name='cid' className='border border-black' onChange={handleChange}/>
    </div>

     <div className='flex'>
      <p className='mr-2'>Candidate Name:</p>
      <input type='text' id='cname' name='cname' className='border border-black' onChange={handleChange}/>
    </div>

     <div className='flex'>
      <p className='mr-2'>Course:</p>
      <input type='text' id='course' name='course' className='border border-black' onChange={handleChange}/>
    </div>

      <div className='flex'>
      <p className='mr-2'>Grade:</p>
      <input type='text' id='grade' name='grade' className='border border-black' onChange={handleChange} />
    </div>

      <div className='flex'>
      <p className='mr-2'>Date:</p>
      <input type='date' id='date' name='date' className='border border-black' onChange={handleChange} />
    </div>

    <div className='m-4'>
      <input type='button' className=' border-2 bg-sky-500 rounded-full border-transparent p-3 ' onClick={IssueCertificate} value='Issue Certificate'/>
    </div>

    </div>

    <div>
      <div>
        <p className='font-bold m-4'>Certificate Details</p>
      </div>
      <div className='flex'>
        <p>Certificate Id:</p>
        <input type='text' id='certId' name='certId'className='border border-black'/>
      </div>
      <div>
        <input type='button' value='Get Certificate' className=' border-2 bg-sky-500 rounded-full border-transparent p-3 ' onClick={getCertificate}/>
      </div>
      <div>
        <p>{output}</p>
      </div>
    </div>
    </div>
  )
}

export default App
