require('dotenv').config({path: '../.env'});
const { Sequelize, DataTypes } = require('sequelize');
const {
    PG_USER,
    PG_PASSWORD,
    PG_HOST,
    PG_PORT,
    PG_DATABASE,
    DATABASE_URL,
} = process.env;

const isProduction = process.env.NODE_ENV === "production";

const connectionString = `postgres://${PG_USER}:${PG_PASSWORD}@${PG_HOST}:${PG_PORT}/${PG_DATABASE}`

const sequelize = new Sequelize((isProduction ? DATABASE_URL : connectionString), {
    dialectOptions: {
        ssl: isProduction,
    },
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