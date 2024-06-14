const checkitemsModel = (sequelize,Sequelize) => {
    const boards = sequelize.define('checkitems',{
        name : {
            type : Sequelize.STRING
        },
        state : {
            type : Sequelize.STRING
        }
    });
    return boards
}


export default checkitemsModel