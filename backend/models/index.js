const path = require('path');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, '..', 'database.sqlite'),
    define: {
        freezeTableName: true
    }
});

const campaign = require('./Campaign')
const invoice = require('./Invoice')
const lineItem = require('./LineItem')

const Campaign = campaign(sequelize, DataTypes);
const Invoice = invoice(sequelize, DataTypes);
const LineItem = lineItem(sequelize, DataTypes);

LineItem.belongsTo(Campaign, {
    foreignKey: 'campaignId',
    sourceKey: 'id',
});
Invoice.belongsTo(Campaign, {
    foreignKey: 'campaignId',
    sourceKey: 'id',
})

module.exports = {
    Campaign,
    Invoice,
    LineItem,
    sequelize
};