const http = require("http");
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();

const fixturesRoutes = require('./routes/fixtures');
const teamsRoutes = require('./routes/teams');
const standingsRoutes = require('./routes/standings');

//middlewares
app.use(bodyParser.json());
app.use(cors({origin: "http://localhost:3000"}));

app.use('/api',fixturesRoutes);
app.use('/api',standingsRoutes);
app.use('/api/teams', teamsRoutes);


const httpServer = http.createServer(app);
const port = process.env.PORT || 8000;
httpServer.listen(port, () => {
    console.log(`Server is running on ${port}`);
})