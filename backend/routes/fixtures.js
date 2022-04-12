const express = require('express');
const router = express.Router();
const { getFixtures, getFixtureEvents, getFixtureStatistics } = require('../controllers/fixtures');


router.get('/fixtures', getFixtures);
router.get('/fixtures/events', getFixtureEvents);
router.get('/fixtures/statistics', getFixtureStatistics);

module.exports = router;