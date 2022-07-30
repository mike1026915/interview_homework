const express = require('express');
const {
    LineItem
} = require('../models');

const router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
    try {
        const result = await LineItem.findAll();

        res.status(200).json(result);
    } catch (err) {
        console.error(err);

        next(err);
    }

});

module.exports = router;
