module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("tutorials", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      },
      userID:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {         // foreign key relationship
          model: 'user',
          key: 'id'
        }
      }
      
    });
  
    return Tutorial;
  };