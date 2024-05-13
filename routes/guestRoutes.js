const express = require('express');
const router = express.Router();
const guestController = require('../controllers/guestController');

// Пример маршрута для получения всех гостей
router.get('/', guestController.getAllGuests);

// Пример маршрута для добавления гостя
router.post('/add', guestController.addGuest);
router.post('/delete/:guestId', guestController.deleteGuest);

module.exports = router;
