import Scoresheet from "../../../models/Scoresheet";
import dbConnect from "../../../middleware/connect";

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const selectedScoresheet = await Scoresheet.findById(id);

        if (!selectedScoresheet) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: selectedScoresheet });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "PUT":
      try {
        const result = await Scoresheet.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });

        if (!result) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({
          data: result,
          message: "Scoresheet Updated Successfully",
        });
      } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
        console.log(error);
      }
      break;
    case "DELETE":
      try {
        const deleteScoresheet = await Scoresheet.findByIdAndDelete(id);
        if (!deleteScoresheet) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ message: "Scoresheet Deleted Successfully" });
      } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
        console.log(error);
      }
      break;
  }
}
