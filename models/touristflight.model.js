const Sequelize = require("sequelize");
const sequelize = require("../Context/dbContext").sequelize;

var Flight = require('./flight.model').Flight;
var Tourist = require('./tourist.model').Tourist;

var touristFlight = sequelize.define('touristFlight', {
    /*
      attributes
    */
    id:{
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    }
});

Tourist.belongsToMany(Flight, {through: 'touristFlight'});
Flight.belongsToMany(Tourist, {through: 'touristFlight'});

touristFlight.sync().then(()=>{
    console.log("Data is loaded")
})

//Working on joined tables

/*
    Returns all joined tables, same as INNER JOIN,
    doesn't let any NULL fields to join due to required property.
*/

var getTouristFlights = (request, response)=>{
    Tourist.findAll({raw: true, include: [{
        model: Flight,
        required: true
    }]}).then(touristFlight => {
        console.log("All:", touristFlight);
        response.json(touristFlight);
    });
}

/*
    Function that counts Tourists for Flight that is passed by Id
    
    function returns a promise, you can get access to the result by calling .then(result=>{???})

    I'm using raw query in this case becouse i wasn't able to get rid of my junction table fields in ORM
*/
var countRegisteratedToursits = (id)=>{
    if(id===undefined||id===null){
        console.log('You have to provide Id in body');

        return;
    }
    
    return sequelize.query(`SELECT count("Tourists"."Id") FROM "Flights" AS "Flight"
    INNER JOIN ( "touristFlights" AS "Tourists->touristFlight"
    INNER JOIN "Tourists" AS "Tourists" ON "Tourists"."Id" = "Tourists->touristFlight"."TouristId")
    ON "Flight"."Id" = "Tourists->touristFlight"."FlightId"
    GROUP BY "Flight"."Id"
    HAVING "Flight"."Id" = :fId`,
    { replacements: { fId: id }, type: sequelize.QueryTypes.SELECT })
    .then(results=>{
        if(results[0]===undefined||results[0]===null)
            return 0;
        else
            return results[0].count;
    })
    
}

var deleteTouristFlight = (request, response)=>{
    console.log(request.body.FlightId, request.body.TouristId)
    touristFlight.destroy({where: {
        FlightId: request.body.FlightId,
        TouristId: request.body.TouristId
    }})
    .then(
        isDeleted=>{
          response.json(isDeleted);
        }
    )

}

/*
    request.body.FlightId
    request.body.TouristId

    responses with
    TRUE - if tourist has been registered
    FALSE - if tourist had been registered before
    FULL - if all seats had been already taken
*/
var addTouristToFlight = (request, response)=>{

    //Counts
    countRegisteratedToursits(request.body.FlightId).then(results=>{
        console.log("mordo: ", results);

        //it finds Flight with less
        Flight.findOne({where:{
            Id: request.body.FlightId,
            number_of_seats: {
                [Sequelize.Op.gt]: results
            }
        }}).then(flight=>{
            console.log(flight);
            if(flight===null||flight===undefined){
                response.send('full');
                console.log("Full");
                return; 
            }

            /*
                if didn't
            */
            touristFlight.findOrCreate({
                where: {
                FlightId: request.body.FlightId,
                TouristId: request.body.TouristId,
            }}).then(result=>{
                let created = result[1];
                if(!created){
                    response.send(false);
                    console.log("You are already registerated to this flight or it is full!");
                }
                else{
                    response.send(true);
                    console.log("created!");
                }
            })
        })
    })
}

module.exports = {
    touristFlight,
    getTouristFlights,
    countRegisteratedToursits,
    addTouristToFlight,
    deleteTouristFlight
}