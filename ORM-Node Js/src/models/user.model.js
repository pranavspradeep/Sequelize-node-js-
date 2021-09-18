module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      userName: {
        type: Sequelize.STRING,
        unique: true,
      },
      password: {
        type: Sequelize.STRING
      },
      userStatus: {
        type: Sequelize.BOOLEAN
      }
      
    });
  
    return User;
  };