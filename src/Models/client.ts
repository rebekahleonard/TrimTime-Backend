import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";
import { Pet } from "./pet";

export class Client extends Model<InferAttributes<Client>, InferCreationAttributes<Client>>{
    declare clientId: number;
    declare petId: number;
    declare firstName: string;
    declare lastName: string;
    declare address: string;
    declare phone: string;
    declare phoneTwo: string;
    declare petName: string;
    declare notes: string;
    declare appointmentId: number;
    declare createdAt?: Date;
    declare updatedAt?: Date;
}


export function ClientFactory(sequelize: Sequelize) {
    Client.init({
        clientId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        }, 
        petId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phoneTwo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        petName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        notes: {
            type: DataTypes.STRING,
            allowNull: false
        },
        appointmentId: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATEONLY,
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
        tableName: 'clients',
        sequelize
    });
    
    Client.hasMany(Pet, {foreignKey: 'clientId'});
    Pet.belongsTo(Client, {foreignKey: 'clientId'});
}