import { Schema, model, Types } from 'mongoose'

interface User{
    username:string,
    password:string,
    role:string,
    accessKey:string,
    profileId:Types.ObjectId
}

const UserSchema = new Schema<User>({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true,
        enum:['Admin','Client','Vet','Manager'],
        default:'Client'
    },
    accessKey:{
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
