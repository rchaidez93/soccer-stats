const express = require('express');
const router = express.Router();

const {getStandings} = require('../controllers/standings');

router.get('/standings', getStandings);

module.exports = router;