module.exports = function(sequelize, DataTypes) {
    const LineItem = sequelize.define('LineItem', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.BIGINT,
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        bookedAmount: {
            allowNull: false,
            type: DataTypes.DECIMAL(50, 25),
        },
        actualAmount: {
            allowNull: false,
            type: DataTypes.DECIMAL(50, 25),
        },
        adjustment: {
            allowNull: false,
            type: DataTypes.DECIMAL(50, 25),
        }
    });

    return LineItem;
};