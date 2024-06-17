import Sequelize from "sequelize";
import dbConfig from "../config/db.config.js";
import userModel from "./users.model.js";
import boardsModel from "./boards.model.js";
import customModel from "./custom.model.js";
import checkitemsModel from "./checkitems.model.js";
import customModel2 from "./custom.model2.js";
import dotenv from 'dotenv'
dotenv.config()

// const sequelize = new Sequelize(dbConfig.db, dbConfig.user, dbConfig.password, {
//   host: dbConfig.host,
//   dialect: dbConfig.dialect,
//   logging: false,
// });

const sequelize = new Sequelize('postgresql://postgres:ruyeTztNvfiLqlPaDcUtzbnsRVzlgpDC@monorail.proxy.rlwy.net:50046/railway', {
  dialect: 'postgres',
  protocol: 'postgres',
  logging : false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.colors = customModel2(sequelize,Sequelize,'colors','name');
db.images = customModel2(sequelize,Sequelize,'images','url')
db.users = userModel(sequelize, Sequelize);
db.boards = boardsModel(sequelize, Sequelize);
db.lists = customModel(sequelize, Sequelize, "lists");
db.cards = customModel(sequelize, Sequelize, "cards");
db.checklists = customModel(sequelize, Sequelize, "checklists");
db.checkitems = checkitemsModel(sequelize, Sequelize);

db.users.hasMany(db.boards, { as: "boards", foreignKey: "username" });
db.boards.belongsTo(db.users, { foreignKey: "username" });

db.boards.hasMany(db.lists, { as: "lists", foreignKey: "boardId" });
db.lists.belongsTo(db.boards, { foreignKey: "boardId" });

db.lists.hasMany(db.cards, { as: "cards", foreignKey: "listId" });
db.cards.belongsTo(db.lists, { foreignKey: "listId" });

db.cards.hasMany(db.checklists, { as: "checklists", foreignKey: "cardId" });
db.checklists.belongsTo(db.cards, { foreignKey: "cardId" });

db.checklists.hasMany(db.checkitems, {
  as: "checkitems",
  foreignKey: "checklistId",
});
db.checkitems.belongsTo(db.checklists, { foreignKey: "checklistId" });

export default db;
