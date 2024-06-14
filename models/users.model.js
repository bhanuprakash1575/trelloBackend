const userModel = (sequelize,Sequelize) => {
  const users = sequelize.define('users',{
    name : {
      type : Sequelize.STRING,
      primaryKey : true,
      unique : true,
      allowNull : false
    },
    password : {
      type : Sequelize.STRING,
      allowNull : false
    }
  });
  return users;
}

export default userModel;