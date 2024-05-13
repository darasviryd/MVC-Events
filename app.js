const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Установка движка представлений EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Парсинг данных форм
app.use(bodyParser.urlencoded({ extended: true }));

// Подключение маршрутов
const eventRoutes = require('./routes/eventRoutes'); // Маршруты связанные с событиями
const guestRoutes = require('./routes/guestRoutes'); // Маршруты связанные с гостями

app.use('/events', eventRoutes); // Подключение маршрутов событий под префикс '/events'
app.use('/guests', guestRoutes); // Подключение маршрутов гостей под префикс '/guests'

// Маршрут для главной страницы
app.get('/', (req, res) => {
    res.render('index'); // Отображение главной страницы
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
app.use(express.static(path.join(__dirname, 'public')));
