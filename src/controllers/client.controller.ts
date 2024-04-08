import {Client} from "../entity/client.entity";

export class ClientController {
    constructor() {
    }
    static async create(req:any, res:any) {
        try {
            const client = req.body;
            const newClient = Client.create(client);
            await newClient.save();
            res.json(newClient);
        } catch (error) {
            console.error("An unexpected error occurred while creating client", error);
            return res.status(500).send({
                message: "An unexpected error occurred while creating client"
            });
        }
    }
    static async getAll(req:any, res:any) {
        try {
            const clients = await Client.find();
            return res.json(clients)
        } catch (error) {
            return res.status(500).send({
                message: "An unexpected error occurred while getting clients"
            });
        }
    }
    static async getClientById(req:any, res:any) {
        try {
            const id = req.params.id;
            const client = await Client.findOne({where: {id: id}});
            if(!client) return res.status(401).json({message: "Client not found"})
            return res.json(client)
        } catch (error) {
            return res.status(500).send({
                message: "An unexpected error occurred while getting client by id"
            });
        }
    }
}
