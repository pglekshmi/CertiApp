import { useLocation } from "react-router-dom";
export default function Certificate(props){
    const {state}= useLocation();
    const data = props.location.state;
    console.log(data);
    return(
        <div>
        <p className="text-right italic">cert-id</p><br></br><br></br>
        <p className="text-center text-4xl font-mono">Kerala Blockchain Academy</p><br></br><br></br><br></br>
        <p className="text-center font-sans ">This is to certify that name has successfully completed course with grade on date</p>
        </div>
    )
}