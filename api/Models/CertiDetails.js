import { Schema, model } from "mongoose";
const memberSchema = new Schema(
    {
        CertID: {
            required: true,
            type: String,
            unique: true,
        },
        CandName: {
            required: true,
            type: String,
        },
        CourseName: {
            required: true,
            type: String
        },
        Grade: {
            required: true,
            type: String
        },
        Date: {
            required: true,
            type: String
        }
    }
);
const CertiDetails = model("certidetails", memberSchema);
export default CertiDetails;