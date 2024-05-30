const Event = require('../models/eventModel');

exports.getAllEvents = async (req, res) => {
    try {
        const events = await Event.getAllEvents();
        res.render('listOfEvents', { events });
    } catch (error) {
        console.error('Error getting events:', error);
        res.status(500).send("Ошибка при получении событий: " + error.message);
    }
};

exports.renderAddEventForm = (req, res) => {
    res.render('addEventForm');
};

exports.addEvent = async (req, res) => {
    try {
        const { name, date, location, description, host } = req.body;
        Event.addEvent({
            id: Event.events.length + 1,
            name,
            date,
            location,
            description,
            host,
            guests: []
        });
        res.redirect('/events');
    } catch (error) {
        console.error('Error adding event:', error);
        res.status(500).send("Ошибка при добавлении события");
    }
};
