var express     = require('express');
var router      = express.Router();
const flightContext = require('../models/flight.model')

router.get('/getFlights', (request, response) => {
    flightContext.getFlights(request, response);
})
router.post('/createFlight', (request, response) => {
    console.log(request.body);
    flightContext.createFlight(request, response);
})
router.post('/updateFlight', (request, response) => {
    console.log(request.body);
    flightContext.updateFlight(request, response);
})
router.post('/deleteFlight', (request, response) => {
    console.log(request.body);
    flightContext.deleteFlight(request, response);
})

module.exports = router;