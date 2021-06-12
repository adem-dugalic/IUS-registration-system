import dbConnect from "../../../../utilities/dbConnect";
import User from "../../../../models/User";

export const config = {
  api: {
    externalResolver: true,
  },
};

dbConnect();

export default (req, res) => {
  if (req.method === "POST") {
    User.findOne({ userID: req.body.userID }).then((user) => {
      if (!user) {
        return res.status(404).json({
          message: "User not found!",
          error: new Error("User not found!"),
        });
      } else if (user.password) {
        return res.status(405).json({
          message: "That user already has registered!",
          error: new Error("That user already has registered!"),
        });
      } else {
        user.password = user.generateHash(req.body.password);

        user
          .save()
          .then(() => {
            res.status(201).json({
              message: "You have registered succesfully!",
            });
          })
          .catch((error) => {
            res.status(500).json({
              error: error,
            });
          });
      }
    });
  }
};
