import { Schema, model, Types } from 'mongoose'

interface Manager{
    user:Types.ObjectId
}

const ManagerSchema = new Schema<Manager>({
    user:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true,
        unique:true
    },
})

export const ManagerModel = model<Manager>('Manager',ManagerSchema)
