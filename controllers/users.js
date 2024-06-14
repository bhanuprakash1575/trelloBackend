import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import db from "../models/index.js";
const User = db.users;
const Colors = db.colors;
const Images = db.images;
dotenv.config();

const createuser = async (req, res) => {
  console.log("ru", req.user);
  try {
    const data = await User.create(req.user);
    console.log("usercreated");
    res.status(200).send(data);
  } catch (error) {
    console.log("incatch");
    console.log(error);
    return res.status(500).json({ message: "internal server error" });
  }
};

const loginUser = async (req, res) => {
  try {
    console.log("hello");
    const user = { name: req.body.username };
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN);
    console.log(accessToken);

    return res.status(200).json({ ...user, accessToken });
  } catch (error) {
    res.status(500).send({ message: "internal server error" });
  }
};

export { createuser, loginUser };
