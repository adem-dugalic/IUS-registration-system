import dbConnect from '../../../utilities/dbConnect';
import UserCourse from '../../../models/UserCourse';

dbConnect();

export default async (req, res) => {
    const {
        query: { id },
        method
    } = req;

    switch (method){
        case 'PUT':
            try{
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
            }
            catch (error){
                res.status(400).json({success:false});
            }
            break;
        case 'DELETE':
            try{
                const userId = req.cookies["userId"] || req.query.userId;
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
            }
            catch (error){
                res.status(400).json({success:false});
            }
            break;
        default:
            res.status(400).json({success:false});
            break;
    }
}