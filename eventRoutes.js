const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

router.get('/add', eventController.renderAddEventForm);


router.post('/', eventController.addEvent);


router.get('/', eventController.getAllEvents);

module.exports = router;
