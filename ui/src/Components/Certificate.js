import { useLocation } from "react-router-dom";
export default function Certificate(){
    const location = useLocation();
    const {state} = location
    const data = state.data;
    console.log(data);
    return(
        <div>
        <p className="text-right italic">{data.CertID}</p><br></br><br></br>
        <p className="text-center text-4xl font-mono">Kerala Blockchain Academy</p><br></br><br></br><br></br>
        <p className="text-center font-sans ">This is to certify that {data.CandName} has successfully completed {data.CourseName} with {data.Grade} on {data.Date}</p>
        </div>
    )
}