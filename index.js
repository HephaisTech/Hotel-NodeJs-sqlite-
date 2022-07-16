const express = require('express')
const app = express();
const port = 3000;
const dao = require('./api/config/dao');
dao.sync().then(() => { console.log('connected'); }).catch((err) => { console.log(err); });
app.get('/', (req, res) => res.send("hello"));

app.use(express.json());

app.use('/api/hotel', require('./api/routes/hotel_router'));
app.use('/api/room', require('./api/routes/room_router'));
app.use('/api/user', require('./api/routes/user_router'));
app.use('/api/booking', require('./api/routes/booking_router'));


app.use((err, req, res, next) => { res.status(500).json({ result: false, message: err.message, status: 500 }); });

app.listen(port, () => console.log(` app listening on port ${port}!`))