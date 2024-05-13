// routes/eventRoutes.js
const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

router.get('/', eventController.getAllEvents);
router.get('/add', eventController.renderAddEventForm);  // Маршрут для формы добавления

module.exports = router;
