// const ethers = new ethers(ethereum);

  abi=[
      {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "constructor"
      },
      {
          "inputs": [
              {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
              }
          ],
          "name": "Certificates",
          "outputs": [
              {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
              },
              {
                  "internalType": "string",
                  "name": "course",
                  "type": "string"
              },
              {
                  "internalType": "string",
                  "name": "grade",
                  "type": "string"
              },
              {
                  "internalType": "string",
                  "name": "date",
                  "type": "string"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "internalType": "uint256",
                  "name": "_id",
                  "type": "uint256"
              },
              {
                  "internalType": "string",
                  "name": "_name",
                  "type": "string"
              },
              {
                  "internalType": "string",
                  "name": "_course",
                  "type": "string"
              },
              {
                  "internalType": "string",
                  "name": "_grade",
                  "type": "string"
              },
              {
                  "internalType": "string",
                  "name": "_date",
                  "type": "string"
              }
          ],
          "name": "issue",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
      }
  ],
  Contract_Address="0x5Ae0781b593778228ACfa391Eb02574EE5531555"

window.onload=()=>{

console.log(abi);
}
connectToMetaMask = async () => {
    let accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
    console.log(accounts);
    alert(`Connected to ${accounts[0]}!`);
  };
issueCertificate =async() =>{
 let courseName = document.getElementById("courseName").value;
 let certificateID= document.getElementById("certificateID").value;
 let candidateName = document.getElementById("candidateName").value;
 let grade = document.getElementById("grade").value;
 let date = document.getElementById("date").value;
//  const infoValue = await contractObj.methods.newCertificate(certificateID,courseName,candidateName,grade,date).send({from:ethereum.selectedAddress});
//  console.log(infoValue);
    localStorage.setItem("certificateID",certificateID);
    localStorage.setItem("courseName",courseName);
    localStorage.setItem("candidateName",candidateName);
    localStorage.setItem("grade",grade);
    localStorage.setItem("date",date);


 alert(certificateID+" is issued");
}

getCertificateDetails = async() =>{
    let certificateID =  document.getElementById("certificateID").value;
    const data = await contractObj.methods.certificateDetails(certificateID).call();
    console.log(data);
    localStorage.setItem("certificateID",certificateID);
    localStorage.setItem("courseName",data.courseName);
    localStorage.setItem("candidateName",data.candidatename);
    localStorage.setItem("grade",data.grade);
    localStorage.setItem("date",data.date);

   window.location.href = "viewCertificate.html";
}