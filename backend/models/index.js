const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: '../database.sqlite'
});

const campaign = require('./Campaign')
const comment = require('./Comment')
const invoice = require('./Invoice')
const lineItem = require('./LineItem')

const Campaign = campaign(sequelize, DataTypes);
const Comment = comment(sequelize, DataTypes);
const Invoice = invoice(sequelize, DataTypes);
const LineItem = lineItem(sequelize, DataTypes);

module.exports = {
    Campaign,
    Comment,
    Invoice,
    LineItem
};