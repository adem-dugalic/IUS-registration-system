import dbConnect from "../../../utilities/dbConnect";
import Course from "../../../models/Course";

export const config = {
  api: {
    externalResolver: true,
  },
};

dbConnect();

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const course = await Course.findById(id);

        if (!course) {
          res.status(400).json({ success: false });
        }

        res.status(200).end(JSON.stringify({ success: true, data: course }));
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "PUT":
      try {
        const course = await Course.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });

        if (!course) {
          res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: course });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        const deletedCourse = await Course.deleteOne({ _id: id });

        if (!deletedCourse) {
          return res.status(400).json({ success: false });
        }
        res.status(200).end(JSON.stringify({ success: true, data: {} }));
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
