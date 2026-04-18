import { Schema, model, Types } from 'mongoose';

interface Address{
    street:string,
    number:string,
    neighborhood:string,
    cep:string,
    state:string,
    city:string,
    complement?:string
}

interface Client{
    user: Types.ObjectId
    name:string,
    cpf:string,
    phone:string,
    isActive:boolean,
    address: Address,
}



const ClientSchema = new Schema<Client>({
    user:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true,
        unique:true
    },
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
    
    
})

export const ClientModel = model<Client>('Client',ClientSchema)