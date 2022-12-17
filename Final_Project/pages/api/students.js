import { isValidObjectId } from 'mongoose';
import dbConnect from '../../middleware/connect';
import Student from '../../models/Student';

export default async function handler (req, res){
    const { method } = req;  
    
    await dbConnect();
    
    switch (method){
        case 'GET':
            try{
                const students = await Student.find({})
                res.status(200).json({ success: true, data: students});
            } catch(error){
                res.status(400).json({success: false});
            }
            break
        case 'POST':
            try{
                const student = await Student.create(req.body);
                res.status(201).json({success: true, data: student});
            } catch(error){
                res.status(400).json({success: false})
            }
            break
        default:
            res.status(400).json({success: false});
            break
    }
}
// export async function getStudent(studentid){
//     try{
//         const findStudent = await Student.find({_id: studentid});
//         const json = res.json()
//         const studentData = json;
//         return studentData;
//     }catch(error){
//         res.status(400).json({success:false});
//     }
// }