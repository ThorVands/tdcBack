import { Schema, model, Types } from 'mongoose'

interface Admin{
    user:Types.ObjectId
}

const AdminSchema = new Schema<Admin>({
    user:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true,
        unique:true
    },
})

export const AdminModel = model<Admin>('Admin',AdminSchema)
