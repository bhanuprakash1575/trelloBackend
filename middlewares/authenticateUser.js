import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

function authenticateUser(req, res, next) {
  try {
    console.log("verifying...");

    if (!req.headers.authorization) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const tokenParts = req.headers.authorization.split(" ");
    if (tokenParts.length !== 2 || tokenParts[0].toLowerCase() !== "bearer") {
      return res.status(401).json({ message: "Invalid authorization format" });
    }
    const accessToken = tokenParts[1];

    const user = jwt.verify(accessToken, process.env.ACCESS_TOKEN);
    console.log(user);
    req.user = user;
    console.log('valid user ', req.user);
    next();
  } catch (error) {
    console.error("Error verifying token:", error.message);
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Invalid token" });
    } else {
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}

export default authenticateUser;
