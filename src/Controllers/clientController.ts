import { RequestHandler } from "express";
import { Op } from "sequelize";
import { Client } from "../models/client";
import { Pet } from "../models/pet";
import { Appointment } from "../models/appointment";




export const getAllClient: RequestHandler = async (req, res, next) => {
    let clients = await Client.findAll({include: Pet});
    res.status(200).json(clients);
}


export const createClient: RequestHandler = async (req, res, next) => {
    let newClient: Client = req.body;
    // newRecipe.userId = user.userId;

    //create new recipe by that user with userId
    if (newClient.firstName && newClient.lastName) {
        let created = await Client.create(newClient);
        res.status(200).json(created);
    }
    else {
        res.status(400).send("First and last name required");
    }
}

export const getClient: RequestHandler = async (req, res, next) => {
    let clientId = req.params.id;
    let client = await Client.findByPk(clientId, {include: [Pet, Appointment]});
    if (client) {
        res.status(200).json(client);
    }
    else {
        res.status(404).json({});
    }
}

export const editClient: RequestHandler = async (req, res, next) => {
    let clientId = req.params.id;
    let clientFound = await Client.findByPk(clientId);

    if (clientFound) {
            clientFound.firstName = req.body.firstName;
            clientFound.lastName = req.body.lastName;
            clientFound.address = req.body.address;
            clientFound.phone = req.body.phone;
            clientFound.phoneTwo = req.body.phoneTwo;
            clientFound.petName = req.body.petName;
            clientFound.notes = req.body.notes;
            await clientFound.save()

            res.status(200).json(clientFound);
    }
    
    else {
        res.status(400).json();
    }
}

export const deleteClient: RequestHandler = async (req, res, next) => {  
    let clientId = req.params.id;
    let found = await Client.findByPk(clientId);
    
    if (found) {
        await Client.destroy({
                where: { cli: req.params.id }
        });
        res.status(200).json();
    }
    else {
        res.status(404).json();
    }
}

// export const searchRecipe: RequestHandler = async (req, res, next) => {

//     let searchQuery = req.params.searchQuery;
//     let client = await Client.findAll({
//         where: {
//             [Op.or]: [
//                 {
//                     firstName: 
//                     {  [Op.like]: `%${searchQuery}%` }
//                 }
//             ],
                    
//         }
//       });
    
//     res.status(200).json(client);

// }

