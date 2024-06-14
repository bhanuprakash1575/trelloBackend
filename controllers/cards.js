import { Op } from "sequelize";
import db from "../models/index.js";
const Cards = db.cards;

const createCard = async (req, res) => {
  const name = req.query.name;
  const listId = req.params.listId;
  if (!name || !listId) {
    console.log("failure");
    res.status(400).json({ message: "invalid url" });
    return;
  }
  try {
    const data = await Cards.create({
      name,
      listId,
    });
    return res.status(200).json(data);
  } catch (error) {
    console.log("incatch");
    console.log(error);
    return res.status(500).json({ message: "internal server error" });
  }
};

const deleteCard = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(400).send({ message: "Invalid BoardId" });
    return;
  }
  try {
    const data = await Cards.destroy({
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

const getAllCardsOfaList = async (req, res) => {
  const listId = req.params.listId;
  if (!listId) {
    console.log("failure");
    res.status(400).send({ message: "Invalid listId" });
    return;
  }

  try {
    const data = await Cards.findAll({
      where: {
        listId: {
          [Op.eq]: listId,
        },
      },
    });
    console.log(data);
    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).json({ message: "internal server error" });
  }
};

export { createCard, deleteCard, getAllCardsOfaList };
