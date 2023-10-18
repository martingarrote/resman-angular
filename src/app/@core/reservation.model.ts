import { CustomerModel } from "./customer.model";
import { RoomModel } from "./room.model";

export interface ReservationModel {
    id: number,
    code: string,
    customer: CustomerModel,
    reservedRoom: RoomModel,
    reservationPrice: number,
    description: string,
    duration: number,
    startDate: Date,
    endDate: Date,
    active: boolean
}