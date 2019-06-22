const Sequelize = require("sequelize");
const sequelize = require("../Context/dbContext").sequelize;


var Flight = sequelize.define('Flight', {
  /*
    attributes
  */
  Id:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  departure_time: {
    type: Sequelize.DATE,
    allowNull: false
  },
  arrival_time: {
    type: Sequelize.DATE,
    allowNull: false
  },
  number_of_seats: {
      type: Sequelize.INTEGER,
      allowNull: false
  },
  ticket_price: {
      type: Sequelize.DOUBLE
  }

});

Flight.sync().then(()=>{
    console.log("Data is loaded")
})

/*
    CRUD
*/

const createFlight = (request, response)=>{
    let flight = request.body;
    Flight.create(flight);
  
    console.log(flight);
    response.json(flight);
  }

const getFlights = (request, response)=>{
    Flight.findAll({raw: true}).then(flight => {
        console.log("All flights:", flight);
        response.json(flight);
    });
}

const updateFlight = (request, response)=>{
    Flight.update(request.body, {
            where: {id: request.body.id}
        })
        .then(flight => {
            if(flight){
                console.log(flight);
                response.json(fligth);
            }
        })
        .catch(err=>{
            console.error(err);
        })
}

const deleteFlight = (request, response)=>{
    Flight.destroy({where: {Id: request.body.id}})
    .then(isDeleted=>{
        response.json(isDeleted)
    })
    .catch(err=>{
        console.error(err);
    })
}

module.exports = {
    getFlights,
    createFlight,
    updateFlight,
    deleteFlight,
    Flight

}