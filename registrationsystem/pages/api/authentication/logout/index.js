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