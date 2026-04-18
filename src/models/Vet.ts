import { model, Schema, Types } from "mongoose";

interface Vet{
    user:Types.ObjectId,
    name:string,
    phone:string,
    serviceType:string,
    notes:string
}

const VetSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    serviceType:{
        type:String,
        required:true
    },
    notes:String
})

export const VetModel = model<Vet>('Vet',VetSchema)