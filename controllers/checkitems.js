import { Op } from "sequelize";
import db from "../models/index.js";
const Checktems = db.checkitems;

const createCheckitem = async (req, res) => {
  const name = req.query.name;
  const checklistId = req.params.checklistId;
  if (!name || !checklistId) {
    console.log("failure");
    res.status(400).json({ message: "invalid url" });
    return;
  }
  try {
    const data = await Checktems.create({
      name,
      checklistId,
      state: "incomplete",
    });
    return res.status(200).json(data);
  } catch (error) {
    console.log("incatch");
    console.log(error);
    return res.status(500).json({ message: "internal server error" });
  }
};

const deleteCheckitem = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(400).send({ message: "Invalid BoardId" });
    return;
  }
  try {
    const data = await Checktems.destroy({
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

const updateCheckitem = async (req, res) => {
  const id = req.params.id;
  const state = req.query.state;
  if (!id || !state) {
    console.log("failure");
    res.status(400).send({ message: "invalid url" });
    return;
  }
  try {
    await Checktems.update(
      { state },
      {
        where: {
          id,
        },
      }
    );
    res.sendStatus(200)
   
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating checkitem" });
  }
};

export { createCheckitem, deleteCheckitem, updateCheckitem };
