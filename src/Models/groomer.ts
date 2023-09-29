import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";
import { Appointment } from "./appointment";


export class Groomer extends Model<InferAttributes<Groomer>, InferCreationAttributes<Groomer>>{
    declare groomerId: number;
    declare name: string;
    declare appointmentId: number;
    declare petId: number;
    declare clientId: number;
    declare createdAt?: Date;
    declare updatedAt?: Date;
}

export function GroomerFactory(sequelize: Sequelize) {
    Groomer.init({
        groomerId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        appointmentId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        petId: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        clientId: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        }
    }, {
        freezeTableName: true,
        tableName: 'groomers',
        sequelize
    });

    // Comment.belongsTo(User);
    // Comment.belongsTo(Recipe);
    Groomer.hasMany(Appointment)

};