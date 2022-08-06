const express = require('express');
const { Op, literal } = require("sequelize");
const {
    LineItem,
} = require('../models');

const router = express.Router();

router.get('/', async function(req, res, next) {
    try {
        const result = await LineItem.findAll({
            where: {
                isArchived: false,
            }
        });

        res.status(200).json(result);
    } catch (err) {
        console.error(err);

        next(err);
    }
});

router.get('/campaign/:id', async function(req, res, next) {
    try {
        const id = req.params.id;
        const result = await LineItem.findAll({
            where: {
                campaignId: id,
                isArchived: false,
            }
        });

        res.status(200).json(result);
    } catch (err) {
        console.error(err);

        next(err);
    }
});

router.get('/:id/comment', async function(req, res, next) {
    try {
        const id = req.params.id;
        const result = await LineItem.findAll({
            where: {
                id
            }
        });

        res.status(200).json(result);
    } catch (err) {
        console.error(err);

        next(err);
    }
});

router.post('/:id/comment', async function(req, res, next) {
    try {
        const id = req.params.id;
        const { text } = req.body
        const [result, _] = await LineItem.update({
            comment: text
        },{
            where: {
                id,
            }
        });

        res.status(200).json(result);
    } catch (err) {
        console.error(err);

        next(err);
    }
});

router.put('/reviewed', async function(req, res, next) {
    try {
        const {
            ids,
        } = req.body;

        await LineItem.update({
            isReviewed: literal(' NOT isReviewed'),
        },{
            where: {
                id: {
                    [Op.in]: ids,
                }
            }
        });

        res.status(200).json({
            ids
        });
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

        await LineItem.update({
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
