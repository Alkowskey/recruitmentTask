var express     = require('express');
var router      = express.Router();
const touristFlight = require('../models/touristflight.model');

router.get('/Tourists', (request, response)=>{
    touristFlight.getTouristFlights(request, response);
})
router.get('/countTourists', (request, response)=>{
    touristFlight.countRegisteratedToursits(request, response);
})
router.post('/addTourist', (request, response)=>{
    touristFlight.addTouristToFlight(request, response);
})
router.post('/deleteTouristFlight', (request, response)=>{
    touristFlight.deleteTouristFlight(request, response);
})

module.exports = router;