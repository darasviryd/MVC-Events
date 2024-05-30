class Event {
    static events = [
        { 
            id: 1, 
            name: "New Year Party", 
            date: "2024-12-31",
            location: "New York City",
            description: "Annual New Year celebration.",
            host: "Company XYZ",
            guests: [
                { id: 101, name: "John Doe", email: "john@example.com", status: "Confirmed" },
                { id: 102, name: "Alice Johnson", email: "alice@example.com", status: "Pending" }
            ]
        },
        { 
            id: 2, 
            name: "Birthday Party", 
            date: "2024-06-15",
            location: "Los Angeles",
            description: "Birthday celebration.",
            host: "John's Friends",
            guests: [
                { id: 201, name: "Jane Smith", email: "jane@example.com", status: "Confirmed" },
                { id: 202, name: "Bob Brown", email: "bob@example.com", status: "Pending" },
                { id: 203, name: "Charlie Davis", email: "charlie@example.com", status: "Confirmed" }
            ]
        }
    ];

    static getAllEvents() {
        return Promise.resolve(this.events);
    }

    static addEvent(newEvent) {
        this.events.push(newEvent);
    }

    static getEventById(id) {
        return Promise.resolve(this.events.find(event => event.id === id));
    }
    
    static addGuest(eventId, guest) {
        const event = this.events.find(event => event.id === eventId);
        if (event) {
            guest.id = event.guests.length ? event.guests[event.guests.length - 1].id + 1 : 1;
            event.guests.push(guest);
        }
    }

    static deleteGuest(guestId) {
        this.events.forEach(event => {
            event.guests = event.guests.filter(guest => guest.id !== guestId);
        });
    }
}

module.exports = Event;
