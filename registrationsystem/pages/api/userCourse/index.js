import dbConnect from '../../../utilities/dbConnect';
import UserCourse from '../../../models/UserCourse';

dbConnect();

export default async (req, res) => {

    const { method } = req;

    switch(method){
        case 'GET':
            try{
                const userId = req.cookies["userId"] || req.query.userId;
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
                    if (result.length === 0) res.status(400).json("Error: can't found data");
                    else res.status(200).json(result);
                    }
                });
            }
            catch (error){
                res.status(400).json({success: false});
            }
            break;
        case 'POST':
            try{
                const userId = req.cookies["userId"] || req.query.userId;
                const courseId = req.body.courseId;
                if (!courseId) {
                    res.json("Error course not define in queries.");
                }
                UserCourse.updateOne(
                    { userId: userId.trim() },
                    { userId: userId, $push: { courses: courseId } },
                    { upsert: true }
                )
                    .then(() => {
                    res.json("courseId updated");
                    })
                    .catch((err) => res.status(401).json("Error: " + err));
            }
            catch (error){
                res.status(400).json({success: false});
            }
            break;
        default:
            res.status(400).json({success: false});
            break;
    }
}