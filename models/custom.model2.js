const model = (sequelize, Sequelize, tableName, columnName) => {
  const table = sequelize.define(tableName, {
    [columnName]: {
      type: Sequelize.STRING,
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
  });
  return table;
};

export default model;
