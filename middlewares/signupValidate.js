import bcrypt from "bcrypt";
import db from '../models/index.js'
const User = db.users;

async function signUpvalidate(req, res, next) {

  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required." });
  }

  try {
    req.user = await User.findByPk(req.body.username);
    console.log(req.user);
    if (req.user) {
        console.log(req.user);
      return res.status(400).json({ message: "Username already exists." });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    req.user = { name: req.body.username, password: hashedPassword };
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }

}

export { signUpvalidate };

