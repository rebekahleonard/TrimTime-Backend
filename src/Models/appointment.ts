import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";
import { Groomer } from "./groomer";

export class Appointment extends Model<InferAttributes<Appointment>, InferCreationAttributes<Appointment>>{
    declare appointmentId: number;
    declare groomerId: number;
    declare petId: number;
    declare clientId: number;
    declare service: string;
    declare when: string;
    declare time: string;
    declare createdAt?: Date;
    declare updatedAt?: Date;
}

export function AppointmentFactory(sequelize: Sequelize) {
    Appointment.init({
        appointmentId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        groomerId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false
        },
        petId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        clientId: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        service: {
            type: DataTypes.STRING,
            allowNull: true
        },
        when: {
            type: DataTypes.STRING,
            allowNull: true
        },
        time: {
            type: DataTypes.STRING,
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
        tableName: 'appointments',
        sequelize
    });

    // Comment.belongsTo(User);
    // Comment.belongsTo(Recipe);
    Groomer.hasMany(Appointments)

};