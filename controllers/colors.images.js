import db from "../models/index.js";

const Colors = db.colors;
const Images = db.images;



const getAllColors = async (req, res) => {
  try {
    console.log('into colors...');
    const colors = await Colors.findAll({ attributes: ["name"] });
    console.log(colors);
    res.status(200).json(colors);
  } catch (error) {
    res.status(500).send({ message: "internal server error" });
  }
};

const getAllImages = async (req, res) => {
  try {
    const images = await Images.findAll({ attributes: ["url"] });
    console.log(images);
    res.status(200).send(images);
  } catch (error) {
    res.status(500).send({ message: "internal server error" });
  }
};



export {getAllColors,getAllImages}