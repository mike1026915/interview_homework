const express = require('express');
const {
    LineItem
} = require('../models');

const router = express.Router();

router.get('/', async function(req, res, next) {
    try {
        const result = await LineItem.findAll();

        res.status(200).json(result);
    } catch (err) {
        console.error(err);

        next(err);
    }
});

router.get('/:id', async function(req, res, next) {
    try {
        const id = req.params.id;
        const result = await LineItem.findAll({
            where: {
                campaignId: id,
            }
        });

        res.status(200).json(result);
    } catch (err) {
        console.error(err);

        next(err);
    }
});

router.put('/:id', async function(req, res, next) {
    try {
        const id = req.params.id;
        const {
            adjustment
        } = req.body;

        const result = await LineItem.update({
            adjustment,
        },{
            where: {
                id
            }
        });

        res.status(200).json({
            id,
            adjustment,
        });
    } catch (err) {
        console.error(err);

        next(err);
    }
});

module.exports = router;
