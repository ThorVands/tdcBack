import { model, Schema, Types } from "mongoose";


interface Schedule{
    client:Types.ObjectId,
    animal:Types.ObjectId,
    date:Date,
    service:string,
    description:string,
    pickupDelivery:boolean,
    contact:string,
    status: 'scheduled' | 'finished' | 'canceled' | 'confirmed'
}

const ScheduleSchema = new Schema<Schedule>({
    client:{
        type:Schema.Types.ObjectId,
        ref:'Client',
        required:true,
    },
    animal:{
        type:Schema.Types.ObjectId,
        ref:'Animal',
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    service:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    pickupDelivery:{
        type:Boolean,
        default:false
    },
    contact:String,
    status:{
        type:String,
        default:'scheduled'
    }
})

export const ScheduleModel = model<Schedule>('Schedule',ScheduleSchema)