import dbConnect from '../../../../utilities/dbConnect';
import User from '../../../../models/User';
import UserSession from '../../../../models/UserSession';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import auth from '../../middleware/auth'

const MongoClient = require('mongodb').MongoClient;
const jwtSecret = 'SUPERSECRETE20220';

const saltRounds = 10;
const url = 'mongodb://localhost:27017';
const dbName = 'IUSSystem';

const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


dbConnect();

export default (req, res) => {
    if (req.method === 'POST') {
        User.findOne({userID: req.body.userID}).then((user) => {
            if(!user){
                return res.status(404).json({
                    message: "User not found!",
                    error: new Error("User not found!")
                });
            }
            if(user.validPassword(req.body.password)){
                const token = jwt.sign({userId: user._id }, "RANDOM_TOKEN_SECRET", {
                    expiresIn: "24h",
                });
    
                UserSession.replaceOne(
                    {userId: user._id},
                    {userId: user._id, token: token},
                    {upsert: true}
                ).then((session) => {
                    if(user.isAdmin){
                        res.status(200).json({
                            userId: user._id
                        })
                    }
                })
    
            }
        }); 
    }
};