import { Op } from "sequelize";
import db from "../models/index.js";

const Boards = db.boards;

const createBoard = async (req, res) => {
  const name = req.query.name;
  const backgroundColor = req.query.color ? req.query.color : "skyblue";
  const backgroundImage = req.query.image ? req.query.image : null;
  const username = req.user.name;
  if (!name || !username) {
    console.log("failure");
    res
      .status(400)
      .send({ message: "could not post without name and username" });
    return;
  }

  try {
    const data = await Boards.create({
      name,
      backgroundColor,
      backgroundImage,
      username,
    });
    return res.status(200).send(data);
  } catch (error) {
    console.log("incatch");
    console.log(error);
    return res.status(500).json({ message: "internal server error" });
  }
};

const deleteBoard = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(400).send({ message: "Invalid BoardId" });
    return;
  }
  try {
    const data = await Boards.destroy({
      where: {
        id,
      },
    });
    return res.sendStatus(200);
  } catch (error) {
    console.log("incatch");
    console.log(error);
    return res.status(500).json({ message: "internal server error" });
  }
};

const getAllBoardsOfaUser = async (req, res) => {
  try {
    const data = await Boards.findAll({
      where: {
        username: {
          [Op.eq]: req.user.name,
        },
      },
    });
    console.log(data);
    return res.status(200).send(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "internal server error" });
  }
};

export { createBoard, deleteBoard, getAllBoardsOfaUser };
