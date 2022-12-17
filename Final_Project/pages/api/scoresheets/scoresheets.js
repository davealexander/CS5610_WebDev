import dbConnect from "../../../middleware/connect";
import Scoresheet from "../../../models/Scoresheet";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const scoresheets = await Scoresheet.find({});
        res.status(200).json({ success: true, data: scoresheets });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const scoresheet = await Scoresheet.create(req.body);
        res.status(201).json({ success: true, data: scoresheet });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
