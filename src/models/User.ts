import { Schema, model, Types } from 'mongoose'

interface User{
    username:String,
    password:String,
    role:String,
    AccessKey:String,
    profileId:Types.ObjectId
}

const UserSchema = new Schema<User>({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true,
        enum:['ADMIN','CLIENT','VET'],
        default:'CLIENT'
    },
    AccessKey:{
        type:String,
        required:false
    },
    profileId:{
        type:Schema.Types.ObjectId,
        required:true,
        refPath:'role'
    }

})

export const UserModel = model<User>('User',UserSchema)
