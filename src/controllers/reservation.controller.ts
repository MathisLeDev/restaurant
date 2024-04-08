import {Reservation} from "../entity/reservation.entity";

export class ReservationController{

    static async create(req: any, res: any) {
        try {
            const reservation = req.body;
            const newReservation = Reservation.create(reservation);
            await newReservation.save();
            res.json(newReservation);
        } catch (error) {
            console.error("An unexpected error occurred while creating reservation", error);
            return res.status(500).send({
                message: "An unexpected error occurred while creating reservation"
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
