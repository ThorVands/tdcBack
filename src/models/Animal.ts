import { model, Schema, Types } from "mongoose";


interface Animal{
    name:string,
    specie:string,
    breed:string,
    color:string,
    age:string,
    sex:string,
    healthIssues:String,
    owner:Types.ObjectId
}

const AnimalSchema = new Schema<Animal>({
    name:{
        type:String,
        specie:String,
        breed:String,
        color:String,
        age:String,
        sex:String,
        healthIssues:String,
        owner:{
            type:Schema.Types.ObjectId,
            ref:'Client',
            required:true,
        }
    }
})

export const AnimalModel = model<Animal>('Animal',AnimalSchema)