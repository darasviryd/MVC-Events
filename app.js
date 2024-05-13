const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(bodyParser.urlencoded({ extended: true }));

const eventRoutes = require('./routes/eventRoutes'); 
const guestRoutes = require('./routes/guestRoutes'); 

app.use('/events', eventRoutes); 
app.use('/guests', guestRoutes); 


app.get('/', (req, res) => {
    res.render('index'); 
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
app.use(express.static(path.join(__dirname, 'public')));
