const express = require('express');
const bodyParser = require('body-parser');
const touristsContext = require('./models/tourist.model')
const flightContext = require('./models/flight.model')
var cors = require('cors')

const touristFlight = require('./models/touristflight.model');

const app = express();

let port = 8080;

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
/*
    Routes
    they'll be exported into other classes
*/
app.get('/api/Tourists/getTourists', (request, response) => {
    touristsContext.getTourists(request, response);
})
app.post('/api/Tourists/createTourist', (request, response) => {
    console.log(request.body);
    touristsContext.createTourist(request, response);
})
app.post('/api/Tourists/updateTourist', (request, response) => {
    console.log(request.body);
    touristsContext.updateTourist(request, response);
})
app.post('/api/Tourists/deleteTourist', (request, response) => {
    touristsContext.deleteTourist(request, response);
})

//Flight route

app.get('/api/Flights/getFlights', (request, response) => {
    flightContext.getFlights(request, response);
})
app.post('/api/Flights/createFlight', (request, response) => {
    console.log(request.body);
    flightContext.createFlight(request, response);
})
app.post('/api/Flights/updateFlight', (request, response) => {
    console.log(request.body);
    flightContext.updateFlight(request, response);
})
app.post('/api/Flights/deleteFlight', (request, response) => {
    console.log(request.body);
    flightContext.deleteFlight(request, response);
})
app.get('/api/joined/Tourists', (request, response)=>{
    touristFlight.getTouristFlights(request, response);
})
app.get('/api/joined/countTourists', (request, response)=>{
    touristFlight.countRegisteratedToursits(request, response);
})
app.post('/api/joined/addTourist', (request, response)=>{
    touristFlight.addTouristToFlight(request, response);
})
app.listen(port, () => {
    console.log('Server is up and running on port number: ', port);
});