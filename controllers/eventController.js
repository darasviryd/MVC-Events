// controllers/eventController.js
const Event = require('../models/eventModel');

exports.getAllEvents = async (req, res) => {
    try {
        const events = await Event.getAllEvents();
        res.render('listOfEvents', { events });  // Указывается ваш EJS файл для списка событий
    } catch (error) {
        console.error('Error getting events:', error);
        res.status(500).send("Ошибка при получении событий: " + error.message);
    }
};
// controllers/eventController.js
exports.renderAddEventForm = (req, res) => {
    res.render('addEventForm');  // Указывается ваш EJS файл для формы добавления событий
};
// controllers/eventController.js
exports.addEvent = async (req, res) => {
    try {
        // Сохранение нового события (здесь простая имитация, без сохранения в базу данных)
        const { name, date } = req.body;
        Event.events.push({ id: Event.events.length + 1, name, date });
        res.redirect('/events');  // Перенаправление обратно к списку событий
    } catch (error) {
        console.error('Error adding event:', error);
        res.status(500).send("Ошибка при добавлении события");
    }
};
