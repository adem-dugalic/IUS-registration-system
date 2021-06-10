import dbConnect from '../../../../utilities/dbConnect';
import UserSession from '../../../../models/UserSession';

dbConnect();

export default (req, res) => {
    if (req.method === 'GET') {
        const userId = req.cookies["userId"] || req.query.userId;
        res.clearCookie("token");
        res.clearCookie("userId");
        UserSession.findOneAndDelete({ userId: userId }).then(() => {
            res.status(200).json("Done!");
            console.log(userId);
        }).catch((err) => {
            res.status(400).json("Error: " + err);
        });
    }
};