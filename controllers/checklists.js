import { Op } from "sequelize";
import db from "../models/index.js";
const Checklists = db.checklists;

const createChecklist = async (req, res) => {
  const name = req.query.name;
  const cardId = req.params.cardId;
  if (!name || !cardId) {
    console.log("failure");
    res.status(400).send({ message: "invalid url" });
    return;
  }

  try {
    const data = await Checklists.create({
      name,
      cardId,
    });
    return res.status(200).send({...data.dataValues,checkitems:[]});
  } catch (error) {
    console.log("incatch");
    console.log(error);
    return res.status(500).json({ message: "internal server error" });
  }
};

const deleteChecklist = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(400).send({ message: "Invalid BoardId" });
    return;
  }
  try {
    await Checklists.destroy({
      where: {
        id,
      },
    });
    return res.sendStatus(200);
  } catch (error) {
    console.log("incatch");
    console.log(error);
    return res.sendStatus(500).json({ message: "internal server error" });
  }
};

const getAllChecklistsOfaCard = async (req, res) => {
  const cardId = req.params.cardId;
  if (!cardId) {
    console.log("failure");
    res.status(400).send({ message: "Invalid CardID" });
    return;
  }

  try {
    const data = await Checklists.findAll({
      where: {
        cardId: {
          [Op.eq]: cardId,
        },
      },
      include: ["checkitems"],
    });
    console.log(data);
    return res.status(200).send(data);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500).json({ message: "internal server error" });
  }
};

export { createChecklist, deleteChecklist, getAllChecklistsOfaCard };
