class Event {
    static events = [
        { 
            id: 1, 
            name: "New Year Party", 
            date: "2024-12-31",
            guests: [
                { id: 101, name: "John Doe", email: "john@example.com" },
                { id: 102, name: "Alice Johnson", email: "alice@example.com" }
            ]
        },
        { 
            id: 2, 
            name: "Birthday Party", 
            date: "2024-06-15",
            guests: [
                { id: 201, name: "Jane Smith", email: "jane@example.com" },
                { id: 202, name: "Bob Brown", email: "bob@example.com" },
                { id: 203, name: "Charlie Davis", email: "charlie@example.com" }
            ]
        }
    ];

    static getAllEvents() {
        return Promise.resolve(this.events);  // This method returns a promise of events
    }

    static deleteGuest(guestId) {
        this.events.forEach(event => {
            event.guests = event.guests.filter(guest => guest.id !== guestId);
        });
    }
}

module.exports = Event;
