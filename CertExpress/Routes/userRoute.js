import {Router} from "express";
import contractData from "../Cert.json" with {type: "json"};
import {JsonRpcProvider,Contract,Wallet} from "ethers";
import dotenv from "dotenv";
dotenv.config();
const router = Router();
console.log("RPC:", process.env.SEPOLIA_RPC_URL);
const provider = new JsonRpcProvider(process.env.SEPOLIA_RPC_URL);
const network = await provider.getNetwork();
console.log(network);
const walletProvider = new Wallet(process.env.SEPOLIA_PRIVATE_KEY,provider);
const contract = new Contract(contractData.ContractAddress,contractData.abi,walletProvider);
router.get('/',(req,res)=>{
    res.send("Hello from user route");
})

router.post('/issueCertificate',async(req,res)=>{
    console.log("Issue Certificate",req.body);
    const {cid,cname,course,grade,date} = req.body;
    console.log("Received data:", {cid,cname,course,grade,date});

    const trans1 = await contract.issue(cid,cname,course,grade,date);
    console.log("Transaction Hash:",trans1.hash);
    res.json({message:"Certificate issued successfully",transactionHash:trans1.hash});
    
})

router.get('/getCertificate/:cid',async(req,res)=>{
    const {cid} = req.params;
    console.log("Fetching certificate with CID:",cid);
    const certificate = await contract.Certificates(cid);
    console.log("Certificate Details:",certificate);
    res.json(certificate);
})

export default router;