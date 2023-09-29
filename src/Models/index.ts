import { Sequelize } from "sequelize";
import { ClientFactory } from "./client";
import { PetFactory } from "./pet";
import { AppointmentFactory } from "./appointment";
import { GroomerFactory } from "./Groomer";

const dbName = 'trimtimeDB';
const username = 'root';
const password = 'Password1!';

const sequelize = new Sequelize(dbName, username, password, {
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql'
});

ClientFactory(sequelize);
PetFactory(sequelize);
AppointmentFactory(sequelize);
GroomerFactory(sequelize);



export const db = sequelize;