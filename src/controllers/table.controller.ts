import {Table} from "../entity/table.entity";

export class TableController {
    constructor() {
    }

    static async getAll(req: any, res: any) {
        try {
            const tables = await Table.find();
            return res.json(tables)
        } catch (e) {
            return res.status(500).send({
                message: "An unexpected error occurred while associating maladie"
            });
        }
    }

    static async create(req: any, res: any) {
        try {
            const nouvelleTable = Table.create(req.body);
            const resultat = await nouvelleTable.save();
            res.json(resultat);
        } catch (error) {
            console.error("An unexpected error occurred while creating commande", error);
            return res.status(500).send({
                message: "An unexpected error occurred while creating commande"
            });
        }
    }

    static async getTableById(req: any, res: any) {
        try {
            const id = req.params.id;
            const table = await Table.findOne({where: {id: id}});
            if(!table) return res.status(401).json({message: "Table not found"})
            return res.json(table)
        } catch (error) {
            return res.status(500).send({
                message: "An unexpected error occurred while getting table by id"
            });
        }
    }

}
