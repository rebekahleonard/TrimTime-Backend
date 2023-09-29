import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";

import { Client } from "./client"; 

export class Pet extends Model<InferAttributes<Pet>, InferCreationAttributes<Pet>>{
    declare petId: number;
    declare clientId: number;
    declare groomerId: number;
    declare appointmentId: number;
    declare name: string;
    declare gender: string;
    declare neutered: string;
    declare typeOfPet: string;
    declare breed: string;
    declare color: string;
    declare birthday: string;
    declare healthIssues: string;
    declare notes: string;
    declare age: number;
    declare weight: number;
    declare rabies: number;
    declare createdAt?: Date;
    declare updatedAt?: Date;
}


export function PetFactory(sequelize: Sequelize) {
    Pet.init({
        petId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        }, 
        clientId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        groomerId: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        appointmentId: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false
        },
        neutered: {
            type: DataTypes.STRING,
            allowNull: false
        },
        typeOfPet: {
            type: DataTypes.STRING,
            allowNull: false
        },
        breed: {
            type: DataTypes.STRING,
            allowNull: false
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false
        },
        birthday: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        healthIssues: {
            type: DataTypes.STRING,
            allowNull: false
        },
        notes: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        age: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        weight: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        rabies: {
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
        tableName: 'pets',
        sequelize
    });
   
    Pet.belongsTo(Client, {foreignKey: 'clientId'});
    Client.hasMany(Pet, {foreignKey: 'clientId'});
    
}