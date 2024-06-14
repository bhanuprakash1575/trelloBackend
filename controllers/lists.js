import { Op } from "sequelize";
import db from "../models/index.js";
const Lists = db.lists;

const createList = async (req, res) => {
  const name = req.query.name;
  const boardId = req.params.boardId;

  if (!name || !boardId) {
    console.log("failure");
    res.status(400).send({ message: "invalid url" });
    return;
  }

  try {
    const data = await Lists.create({
      name,
      boardId,
    });
    return res.status(200).send(data);
  } catch (error) {
    console.log("incatch");
    console.log(error);
    return res.status(500).json({ message: "internal server error" });
  }
};

const deleteList = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(400).send({ message: "Invalid BoardId" });
    return;
  }
  try {
    const data = await Lists.destroy({
      where: {
        id,
      },
    });
    return res.sendStatus(200).send(data);
  } catch (error) {
    console.log("incatch");
    console.log(error);
    return res.sendStatus(500).json({ message: "internal server error" });
  }
};

const getAllListsOfaBoard = async (req, res) => {
  const boardId = req.params.boardId;
  if (!boardId) {
    console.log("failure");
    res.status(400).send({ message: "Invalid BoardID" });
    return;
  }

  try {
    const data = await Lists.findAll(
      {
        where: {
          boardId: {
            [Op.eq]: boardId,
          },
        },
        include: ["cards"]
      },
    );
    console.log(data);
    return res.status(200).send(data);
  } catch (error) {}
};

export { createList, deleteList, getAllListsOfaBoard };
