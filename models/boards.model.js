const boardsModel = (sequelize,Sequelize) => {
    const boards = sequelize.define('boards',{
        name : {
            type : Sequelize.STRING
        },
        backgroundColor : {
            type : Sequelize.STRING
        },
        backgroundImage : {
            type : Sequelize.STRING
        }
    });
    return boards
}


export default boardsModel