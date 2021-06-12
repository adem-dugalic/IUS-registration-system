import dbConnect from "../../../../utilities/dbConnect";
import UserSession from "../../../../models/UserSession";

export const config = {
  api: {
    externalResolver: true,
  },
};

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
