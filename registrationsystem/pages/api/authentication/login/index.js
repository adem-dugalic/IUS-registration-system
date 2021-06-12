import dbConnect from "../../../../utilities/dbConnect";
import User from "../../../../models/User";
import UserSession from "../../../../models/UserSession";
import jwt from "jsonwebtoken";

export const config = {
  api: {
    externalResolver: true,
  },
};

dbConnect();

export default (req, res) => {
  if (req.method === "POST") {
    User.findOne({ userID: req.body.userID })
      .then((user) => {
        if (!user) {
          return res.status(404).json({
            message: "User not found!",
            error: new Error("User not found!"),
          });
        }
        if (user.validPassword(req.body.password)) {
          const token = jwt.sign({ userId: user._id }, "RANDOM_TOKEN_SECRET", {
            expiresIn: "24h",
          });

          UserSession.replaceOne(
            { userId: user._id },
            { userId: user._id, token: token },
            { upsert: true }
          )
            .then((session) => {
              if (user.isAdmin) {
                res.status(200).json({
                  userId: user._id,
                  token: token,
                  expiresIn: 1,
                  isAdmin: true,
                });
              } else if (user.isSAO) {
                res.status(200).json({
                  userId: user._id,
                  token: token,
                  expiresIn: 1,
                  isSAO: true,
                });
              } else {
                res.status(200).json({
                  userId: user._id,
                  token: token,
                  expiresIn: 1,
                  isAdmin: false,
                  name: user.name,
                  surname: user.surname,
                });
              }
            })
            .catch((err) => {
              res.status(401).json("Error replaceOne: " + err);
            });
        } else {
          return res.status(401).json({
            message: "Incorrect password",
            error: new Error("Incorrect password!"),
          });
        }
      })
      .catch((error) => {
        res.status(500).json({
          error: error,
        });
      });
  } else {
    res.status(500);
  }
};
