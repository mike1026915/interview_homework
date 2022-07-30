module.exports = function(sequelize, DataTypes) {
    const Invoice = sequelize.define('Invoice', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.BIGINT,
        },
        campaignId: {
            allowNull: false,
            type: DataTypes.BIGINT,
        },
        total: {
            allowNull: false,
            type: DataTypes.DOUBLE,
        },
    });

    return Invoice;
};