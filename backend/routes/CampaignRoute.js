const express = require('express');
const R = require('ramda');
const {
    Campaign,
    LineItem,
} = require('../models');

const router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
    try {
        const campaigns = await Campaign.findAll();
        const lineItems = await LineItem.findAll();
        const campaignItemsLookup = R.groupBy((lineItems) => {
            return lineItems.campaignId;
        }, lineItems);

        const result = campaigns.filter((campaign) => (!campaign.isReviewed))
            .map((campaign) => {
                return {
                    id: campaign.id,
                    name: campaign.name,
                    total: R.sum(R.map((item) => (item.actualAmount + item.adjustment), campaignItemsLookup[campaign.id]))
                };
            })

        res.status(200).json(result);
    } catch (err) {
        console.error(err);

        next(err);
    }

});

module.exports = router;
