import { model, Schema, Types } from "mongoose";


interface Animal{
    name:string,
    specie:string,
    race:string,
    color:string,
    age:string,
    sex:string,
    owner:Types.ObjectId
}

const AnimalSchema = new Schema({
    name:{
        type:String,
        specie:String,
        race:String,
        color:String,
        age:String,
        sex:String,
        owner:{
            type:Schema.Types.ObjectId,
            required:true,
        }
    }
})

export const AnimalModel = model<Animal>('Animal',AnimalSchema)