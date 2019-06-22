const Sequelize = require("sequelize");
const sequelize = require("../Context/dbContext").sequelize;


var Tourist = sequelize.define('Tourist', {
  /*
    attributes
  */
  Id:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  surname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  sex: {
      type: Sequelize.STRING,
      allowNull: false
  },
  country: {
      type: Sequelize.STRING
  },
  notes: {
      type: Sequelize.STRING
  },
  date_of_birth: {
      type: Sequelize.DATEONLY,
      allowNull: false
  }

});

Tourist.sync().then(()=>{
    console.log("Data is loaded")
})

/*
  CRUD
*/

const createTourist = (request, response)=>{
  let tourist = request.body;
  Tourist.create(tourist);

  console.log(tourist);
  response.send("Created successfully!");
}

const getTourists = (request, response)=>{
    Tourist.findAll({raw: true}).then(tourists => {
        console.log("All users:", tourists);
        response.json(tourists);
    });
}

const updateTourist = (request, response)=>{
  Tourist.update(request.body,
    {where:{Id: request.body.Id}})
  .then(tourist=>{
    if(tourist){
      console.log(tourist);
      response.send("Saved!");
    }
  })
  .catch(err=>{
    response.send("Something went wrong!");
    console.log(err);
  });
}

const deleteTourist = (request, response)=>{
  Tourist.destroy({where: {Id: request.body.Id}})
  .then(
    isDeleted=>{
      if(isDeleted)
        response.send('Deleted successfully');
      else
        response.send('I wasn\'t able to delete');
    }
  )
}

module.exports = {
    createTourist,
    getTourists,
    updateTourist,
    deleteTourist,
    Tourist
}