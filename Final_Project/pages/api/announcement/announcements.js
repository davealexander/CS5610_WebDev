import Announcement from "../../../models/Announcement";
import dbConnect from '../../../middleware/connect';

export default async function handler (req, res){
	const { method } = req;
	const { id } = req.query;

	await dbConnect();

    switch (method){
        case 'GET':
            try{
                const announcements = await Announcement.find({})
                res.status(200).json({ success: true, data: announcements});
            } catch(error){
                res.status(400).json({success: false});
            }
            break
        //create new announcement
        case 'POST':
            try{
                const newAnnouncement = await new Announcement(req.body).save(); 
                res.status(201).json({success: true, data: newAnnouncement});
            } catch(error){
                res.status(400).json({success: false})
		}
            break
        default:
            res.status(400).json({success: false});
            break
		}
	}