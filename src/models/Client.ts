import { Schema, model, Types } from 'mongoose';

interface Client{
    name:string,
    cpf:string,
    phone:string,
    isActive:boolean,
    address: Address,
    user: Types.ObjectId
}

interface Address{
    street:string,
    number:string,
    neighborhood:string,
    cep:string,
    state:string,
    city:string,
    complement?:string
}

export const ClientSchema = new Schema<Client>({
    name:{
        type:String,
        required:true,
    },
    cpf:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:String,
        required:true
    },
    isActive:{
        type:Boolean,
        required:true,
        default:true
    },
    address:{
        street:String,
        number:String,
        neighborhood:String,
        cep:String,
        state:String,
        city:String,
        complement:String
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true,
        unique:true
    }
    
})

export const ClientModel = model<Client>('Client',ClientSchema)