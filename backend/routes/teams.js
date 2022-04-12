const express = require('express');
const router = express.Router();

const {getAllTeams} = require('../controllers/teams');

router.get('/all', getAllTeams);

module.exports = router;