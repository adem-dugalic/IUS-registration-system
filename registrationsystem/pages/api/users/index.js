import dbConnect from "../../../utilities/dbConnect";
import User from "../../../models/User";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const users = await User.find({});

        res.status(200).json({ success: true, data: users });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const user = new User({
          userID: req.body.userID,
          name: req.body.name,
          surname: req.body.surname,
          faculty: req.body.faculty,
          program: req.body.program,
          semester: req.body.semester,
          email: req.body.email,
          paid: req.body.paid,
          isSAO: req.body.isSAO,
          isAdmin: req.body.isAdmin,
          isDeleted: req.body.isDeleted,
        });
        console.log(user);
        user
          .save()
          .then(() => {
            res.status(201).json({
              message: "User added successfully!",
            });
          })
          .catch((error) => {
            res.status(500).json({
              error: error,
            });
          });
      } catch (error) {
        res.status(400).json({ success: false });
        console.log(user);
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
