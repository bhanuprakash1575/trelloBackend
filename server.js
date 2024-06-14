import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from 'dotenv'
import logger from "./logger.js";
import userRouter from "./routes/user.routes.js";
import apiRouter from "./routes/api.routes.js";
import db from "./models/index.js";
import authenticateUser from "./middlewares/authenticateUser.js";
dotenv.config()
const app = express();

const morganFormat = ":method :url :status :response-time ms";

db.sequelize
  .sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};
app.use(
  morgan(morganFormat, {
    skip: function (req, res) {
      return req.method === "OPTIONS";
    },
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(" ")[0],
          url: message.split(" ")[1],
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  })
);

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route

app.get('/',(req,res)=>{
  res.send('Welcome')
})

app.use("/user", userRouter);

app.use(authenticateUser);

app.use("/api", apiRouter);

// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
