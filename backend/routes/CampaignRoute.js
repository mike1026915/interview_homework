const express = require('express');
const R = require('ramda');
const {
    Campaign,
    LineItem,
} = require('../models');

const router = express.Router();

router.get('/', async function(req, res, next) {
    try {
        const [campaigns, lineItems] = await Promise.all([Campaign.findAll(), LineItem.findAll()]);
        const campaignItemsLookup = R.groupBy((lineItems) => {
            return lineItems.campaignId;
        }, lineItems);

        const result = campaigns
            .map((campaign) => {
                return {
                    id: campaign.id,
                    name: campaign.name,
                    total: R.sum(R.map((item) => (item.actualAmount + item.adjustment), campaignItemsLookup[campaign.id])),
                };
            })

        res.status(200).json(result);
    } catch (err) {
        console.error(err);

        next(err);
    }
});

router.get('/:id', async function(req, res, next) {
    try {
        const id = req.params.id;
        const campaign = await Campaign.findAll({
            where: {
                id,
            }
        });

        res.status(200).json(campaign);
    } catch (err) {
        console.error(err);

        next(err);
    }
});

module.exports = router;
