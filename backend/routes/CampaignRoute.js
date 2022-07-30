const express = require('express');
const {
    Campaign
} = require('../models');

const router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
    try {
        const result = await Campaign.findAll();

        res.status(200).json(result);
    } catch (err) {
        console.error(err);

        next(err);
    }

});

module.exports = router;
