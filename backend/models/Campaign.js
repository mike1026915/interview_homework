module.exports = function(sequelize, DataTypes) {
    const Campaign = sequelize.define('Campaign', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.BIGINT,
        },
        name: {
            type: DataTypes.STRING,
        },
    });

    return Campaign;
};