import {Reservation} from "../entity/reservation.entity";
import {Client} from "../entity/client.entity";
import {Table} from "../entity/table.entity";

export class ReservationController{

    static async create(req: any, res: any) {
        try {
            const dateEtHeure = req.body.dateEtHeure;
            const statut = req.body.statut;
            const client = await Client.findOne({where: {id: req.body.clientId}});
            const table = await Table.findOne({where: {id: req.body.tableId}});

            if(!client) return res.status(404).json({ message: "Client not found" });
            if(!table) return res.status(404).json({ message: "Table not found" });

            const newReservation = Reservation.create({client,table, dateEtHeure, statut});

            await newReservation.save();
            res.json(newReservation);
        } catch (error) {
            console.error("An unexpected error occurred while creating reservation", error);
            return res.status(500).send({
                message: "An unexpected error occurred while creating reservation"
            });
        }
    }

    static async cancel(req: any, res: any) {
        try {
            const id = req.params.id;
            const reservation = await Reservation.findOne({where: {id: id}});
            if(!reservation) return res.status(401).json({message: "Reservation not found"})
            await Reservation.update(id, {statut: "cancelled"});
            return res.json({message: "Reservation cancelled"})
        } catch (error) {
            return res.status(500).send({
                message: "An unexpected error occurred while cancelling reservation"
            });
        }
    }

    static async getAll(req: any, res: any) {
        try {
            const reservations = await Reservation.find();
            return res.json(reservations)
        } catch (e) {
            return res.status(500).send({
                message: "An unexpected error occurred while associating reservation"
            });
        }
    }

    static async update(req: any, res: any) {
        try {
            const id = req.params.id;
            const dateEtHeure = req.body.dateEtHeure;
            const statut = req.body.statut;
            const client = await Client.findOne({where: {id: req.body.client}});
            const table = await Table.findOne({where: {id: req.body.table}});

            if(!client) return res.status(404).json({ message: "Client not found" });
            if(!table) return res.status(404).json({ message: "Table not found" });

            const reservationToUpdate = await Reservation.findOne({where: {id: id}});
            if(!reservationToUpdate) return res.status(401).json({message: "Reservation not found"})
            const reservation = await Reservation.update(id, {client,table, dateEtHeure, statut});
            return res.json(reservation);
        } catch (error) {
            console.error("An unexpected error occurred while updating reservation", error);
            return res.status(500).send({
                message: "An unexpected error occurred while updating reservation"
            });
        }
    }

    static async getReservationById(req: any, res: any) {
        try {
            const id = req.params.id;
            const reservation = await Reservation.findOne({where: {id: id}});
            if(!reservation) return res.status(401).json({message: "Reservation not found"})
            return res.json(reservation)
        } catch (error) {
            return res.status(500).send({
                message: "An unexpected error occurred while getting reservation by id"
            });
        }
    }
}
