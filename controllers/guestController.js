
const Event = require('../models/eventModel');

exports.getAllGuests = async (req, res) => {
    try {
        const events = await Event.getAllEvents();
        res.render('guestList', { events });  
    } catch (error) {
        console.error('Error getting guests:', error);
        res.status(500).send("Ошибка при получении списка гостей: " + error.message);
    }
};

exports.addGuest = async (req, res) => {
    try {
        const { name, email, event } = req.body;
        const eventId = parseInt(event); 
        Event.addGuest(eventId, { name, email }); 
        res.redirect('/guests');
    } catch (error) {
        console.error('Error adding guest:', error);
        res.status(500).send("Ошибка при добавлении гостя");
    }
};

exports.deleteGuest = (req, res) => {
    const { guestId } = req.params;
    Event.deleteGuest(guestId);
    res.redirect('/guests'); 
};
