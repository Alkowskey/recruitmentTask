const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')

const touristRouter = require('./routes/Tourists.router');
const flightsRouter = require('./routes/Flights.router');
const joinedRouter = require('./routes/TouristsFlights.router');



const app = express();

let port = 8080;

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

//Tourist route

app.use('/api/Tourists', touristRouter);

//Flight route

app.use('/api/Flights', flightsRouter);

//Joined route

app.use('/api/joined', joinedRouter);

app.listen(port, () => {
    console.log('Server is up and running on port number: ', port);
});