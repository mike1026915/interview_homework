
module.exports = function(sequelize, DataTypes) {
    const Comment = sequelize.define('Comment', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.BIGINT,
        },
        text: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        itemId: {
            allowNull: false,
            type: DataTypes.BIGINT,
        }
    });

    return Comment;
};