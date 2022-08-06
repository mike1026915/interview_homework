const express = require('express');
const R = require('ramda');
const { Op } = require("sequelize");

const {
    Campaign,
    LineItem,
    Invoice,
    sequelize,
} = require('../models');

const router = express.Router();

router.get('/', async function(req, res, next) {
    try {
        const result = await Invoice.findAll();

        res.status(200).json(result);
    } catch (err) {
        console.error(err);

        next(err);
    }
});


router.post('/', async function(req, res, next) {
    try {
        const {
            campaignIds
        } = req.body;

        const [lineItems, campaigns] = await Promise.all([
            LineItem.findAll({
                where: {
                    campaignId: {
                        [Op.in]: campaignIds,
                    }
                }
            }),
            Campaign.findAll({
                where: {
                    id: {
                        [Op.in]: campaignIds,
                    }
                }
            }),
        ]);

        const campaignItemsLookup = R.groupBy((lineItems) => {
            return lineItems.campaignId;
        }, lineItems);

        const invoices = campaigns.map((campaign) => {
            return {
                campaignId: [campaign.id],
                name: [campaign.name],
                total: R.sum(R.map((item) => (item.actualAmount + item.adjustment), campaignItemsLookup[campaign.id])),
            };
        });

        const t = await sequelize.transaction();

        try {
            await Promise.all([
                Invoice.bulkCreate(invoices, {
                    updateOnDuplicate: ['campaignId', 'total', 'name', 'updatedAt'],
                    transaction: t
                }
                ),
                Campaign.update({
                    isInvoiceCreated: true,
                }, {
                    where: {
                        id: {
                            [Op.in]: campaignIds,
                        }
                    },
                    transaction: t,
                })
            ]);
            await t.commit();
        } catch (err) {
            await t.rollback();

            throw err;
        }

        res.status(204).send();
    } catch (err) {
        console.error(err);

        next(err);
    }
});

module.exports = router;
