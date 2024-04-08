import {Employe} from "../entity/employe.entity";

export class EmployeController {
    constructor() {
    }

    static async getAll(req:any, res:any) {
        try {
            const employes = await Employe.find();
            return res.json(employes)
        } catch (error) {
            return res.status(500).send({
                message: "An unexpected error occurred while getting employes"
            });
        }
    }

    static async getEmployeById(req:any, res:any) {
        try {
            const id = req.params.id;
            const employe = await Employe.findOne({where: {id: id}});
            if(!employe) return res.status(400).json({message: "Employe not found"})
            return res.json(employe)
        } catch (error) {
            return res.status(500).send({
                message: "An unexpected error occurred while getting employe by id"
            });
        }
    }

    static async create(req:any, res:any) {
        try {
            const employe = req.body;
            const newEmploye = Employe.create(employe);
            await newEmploye.save();
            res.json(newEmploye);
        } catch (e) {
            return res.status(500).send({
                message: "An unexpected error occurred while creating employe"
            });
        }
    }
}
