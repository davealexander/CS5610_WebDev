import mongoose from 'mongoose'

const StudentSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    grade: Number,
    instrument1: String,
    instrument2: String,
    school: String,
    ensemble1: String,
    ensemble2:String,
    preference:String
}); 
// {
//     timestamps: true,
// });
module.exports = mongoose.models.Student || mongoose.model('Student', StudentSchema)