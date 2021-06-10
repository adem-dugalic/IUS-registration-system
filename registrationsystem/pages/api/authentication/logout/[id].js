import dbConnect from "../../../../utilities/dbConnect";
import User from "../../../../models/User";
import UserSession from "../../../../models/UserSession";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import auth from "../../middleware/auth";
import Cookies from "universal-cookie";

const MongoClient = require("mongodb").MongoClient;
const jwtSecret = "SUPERSECRETE20220";

const saltRounds = 10;
const url = "mongodb://localhost:27017";
const dbName = "IUSSystem";

const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

dbConnect();

export default (req, res) => {
  const {
    query: { id },
  } = req;

  // const cookies = new Cookies();
  if (req.method === "GET") {
    // const userId = cookies.get("userId") || req.query.userId;
    // console.log("Alive");
    // console.log(id);
    // cookies.remove(["token", "userId", "isAdmin", "isSAO"]);
    UserSession.findOneAndDelete({ userId: id })
      .then(() => {
        res.status(200).json("Done!");
        console.log(id);
      })
      .catch((err) => {
        res.status(400).json("Error: " + err);
      });
  }
};
