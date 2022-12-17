import Announcement from "../../../models/Announcement";
import dbConnect from '../../../middleware/connect';

export default async function handler (req, res){
    const { method } = req;
    const { id } = req.query;
    
    await dbConnect();
    
    if (method === "PUT") {
		try {
			const result = await Announcement.findByIdAndUpdate(
				id,
				{ $set: req.body },
				{ new: true }
			);
            
			res
				.status(200)
				.json({ data: result, message: "Announcement Updated Successfully" });
		} catch (error) {
			res.status(500).json({ message: "Internal Server Error" });
			console.log(error);
		}
	}

	if (method === "DELETE") {
		try {
			await Announcement.findByIdAndDelete(id);
			res.status(200).json({ message: "Announcement Deleted Successfully" });
		} catch (error) {
			res.status(500).json({ message: "Internal Server Error" });
			console.log(error);
		}
	}
};