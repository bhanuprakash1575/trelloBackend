const customModel = (sequelize, Sequelize, tableName) => {
  const table = sequelize.define(tableName, {
    name: {
      type: Sequelize.STRING,
    },
  });
  return table;
};

export default customModel;
