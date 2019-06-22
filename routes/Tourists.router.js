var express     = require('express');
var router      = express.Router();
const touristsContext = require('../models/tourist.model')

router.get('/getTourists', (request, response) => {
    touristsContext.getTourists(request, response);
})
router.post('/createTourist', (request, response) => {
    console.log(request.body);
    touristsContext.createTourist(request, response);
})
router.post('/updateTourist', (request, response) => {
    console.log(request.body);
    touristsContext.updateTourist(request, response);
})
router.post('/deleteTourist', (request, response) => {
    touristsContext.deleteTourist(request, response);
})

module.exports = router;