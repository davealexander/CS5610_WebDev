import User from "../../../models/UserRegistration";
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
        const selectedUser = await User.findById(id);

        if (!selectedUser) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: selectedUser });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "PUT":
      try {
        const result = await User.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });

        if (!result) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({
          data: result,
          message: "User Updated Successfully",
        });
      } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
        console.log(error);
      }
      break;
    case "DELETE":
      try {
        const deleteUser = await User.findByIdAndDelete(id);
        if (!deleteUser) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ message: "User Deleted Successfully" });
      } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
        console.log(error);
      }
      break;
  }
}
