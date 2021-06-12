import dbConnect from "../../../utilities/dbConnect";
import UserCourse from "../../../models/UserCourse";

dbConnect();

export const config = {
  api: {
    externalResolver: true,
  },
};

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "POST":
      try {
        const userId = id;
        const courseId = req.body.courseId;
        console.log(userId);
        console.log(courseId);
        if (!courseId) {
          res.json("Error course not define in queries.");
        }
        UserCourse.updateOne(
          { userId: userId.trim() },
          { userId: userId, $push: { courses: courseId } },
          { upsert: true }
        )
          .then(() => {
            res.end(JSON.stringify("courseId updated"));
          })
          .catch((err) => res.status(401).json("Error: " + err));
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "GET":
      try {
        const userId = id;
        UserCourse.aggregate([
          {
            $match: { userId: userId },
          },
          {
            $project: {
              courses: {
                $map: {
                  input: "$courses",
                  as: "item1",
                  in: {
                    $toObjectId: "$$item1",
                  },
                },
              },
            },
          },
          {
            $lookup: {
              from: "courses",
              localField: "courses",
              foreignField: "_id",
              as: "information",
            },
          },
          {
            $project: {
              information: 1,
              courses: 1,
            },
          },
        ]).exec((err, result) => {
          if (err) {
            res.status(500).json(err);
          }
          if (result) {
            if (result.length === 0)
              res.status(400).json("Error: can't find data");
            else res.status(200).end(JSON.stringify(result));
          }
        });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "PUT":
      try {
        console.log(req.body.userId || req.query.userId);
        UserCourse.replaceOne(
          { userId: req.body.userId },
          { userId: req.body.userId, courses: req.body.courses },
          { upsert: true }
        )
          .then(() => {
            res.json("Added!");
          })
          .catch((err) => res.status(401).json("Error: " + err));
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        const userId = id;
        const courseId = req.query.courseId;
        if (!courseId) {
          res.json("Error course not define in queries.");
        }

        console.log("Deleting: " + courseId);

        UserCourse.updateOne(
          { userId: userId.trim() },
          { userId: userId, $pull: { courses: courseId } },
          { upsert: true }
        )
          .then(() => {
            res.json("Removed");
          })
          .catch((err) => res.status(401).json(err));
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
