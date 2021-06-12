import dbConnect from "../../../utilities/dbConnect";
import Course from "../../../models/Course";

export const config = {
  api: {
    externalResolver: true,
  },
};

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const courses = await Course.find({});

        res.status(200).end(JSON.stringify({ success: true, data: courses }));
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const course = await Course.create(req.body);

        res.status(201).end(JSON.stringify({ succes: true, data: course }));
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
