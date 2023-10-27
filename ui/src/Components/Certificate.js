import { useLocation } from "react-router-dom";
export default function Certificate(){
    const location = useLocation();
    const {state} = location
    const data = state.data;
    console.log(data);
    return(
        <div className="m-32 mx-80 border-2 border-teal-700 ">
        <div className="m-1 border-2 border-teal-700 rounded">
            
        <p className="pt-10 pl-10 font-bold text-left italic">Certificate ID: #{data.CertID}</p><br/>
        <image></image>
        <p className="text-center text-4xl font-bold font-mono">Kerala Blockchain Academy</p><br/>
        <p className="text-center font-sans pt-16 pb-8 italic font-semibold">This is to certify that {data.CandName}<br></br> has successfully completed {data.CourseName}<br></br> with {data.Grade} on {data.Date}</p>
        </div>
        </div>
    )
}