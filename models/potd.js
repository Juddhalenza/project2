/* eslint-disable indent */
/* eslint-disable prettier/prettier */
// Import Sequelize library for `Sequelize.literal`.
var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
    var POTD = sequelize.define("POTD", {
        id: {
            type: DataTypes.INTEGER(11),
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        potdDate: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        potdImage: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        potdTitle: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        potdExplanation: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
        saved: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
        }
    }, {
        // classMethods: {
        //     associate: function(models) {
        //         Movie.belongsTo(models.Customer, {
        //             onDelete: "cascade",
        //             foreignKey: {
        //                 allowNull: true
        //             }
        //         });
        //     }
        // }
    });

    // Return the model we defined.
    return POTD;
};