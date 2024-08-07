import { Router } from 'express';
// import CertiDetails from './Models/CertiDetails.js';
var router = Router();
const certDetails = new Map();
router.get('/', (req, res) => {
    res.send("Hello World");
})

router.post('/issue', async (req, res) => {
    try {


        const { certificateID, courseName, candidateName, grade, date } = req.body;
        console.log(certificateID);
        if (certDetails.has(certificateID)) {
            res.status(201).json({ message: `${certificateID} already exist` })
        }
        else {
            certDetails.set(certificateID, { courseName, candidateName, grade, date });
            console.log(certDetails.get(certificateID));
            // const result = await CertiDetails.create(data);
            res.status(201).json({ message: 'Certificate details saved' })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json();
    }
})

router.get('/view/:id', async (req, res) => {
    const id1 = req.params.id;
    console.log(id1);
    const details = certDetails.get(id1);
    console.log(details);
    // console.log(id);
    // const details = await CertiDetails.findOne({CertID: id});
    // console.log(details);
    if (details) {
        // res.cookie('certDetails',JSON.stringify(details));
        res.json(details);
    }
    else {
        localStorage.clear();
        res.status(404).json({ message: 'details not found' });
    }

})
router.post('/update', (req, res) => {
    try {
        console.log("hello");
        const { certificateID, courseName, candidateName, grade, date } = req.body;
        console.log(certificateID);

        certDetails.set(certificateID, { courseName, candidateName, grade, date });
        // console.log(certDetails.get(certificateID));
        // const result = await CertiDetails.create(data);
        res.status(201).json({ message: `${certificateID} details updated` })
    } catch (error) {
        console.log(error);
        res.status(500).json();
    }
})

router.get('/delete/:id', (req, res) => {
    const id1 = req.params.id;
    console.log(id1);
    console.log(certDetails.get(id1));
    certDetails.delete(id1);
    console.log(certDetails.get(id1));
    const msg = `${id1} details deleted`;
    console.log(msg);
    
    res.status(200).json({ message: `${id1} details deleted`})
    // res.send({msg:'delete'});
})
export default router;