const express = require('express');
const router = express.Router();
const guestController = require('../controllers/guestController');


router.get('/', guestController.getAllGuests);


router.post('/add', guestController.addGuest);
router.post('/delete/:guestId', guestController.deleteGuest);

module.exports = router;
