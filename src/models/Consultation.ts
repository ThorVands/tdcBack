import { model, Schema, Types } from "mongoose";


interface Consultation{
    client:Types.ObjectId,
    animal:Types.ObjectId,
    vet:Types.ObjectId,
    date:Date,
    service:string,
    exams:string,
    notes:string,
    returnDate?:Date,
    dewormer?:string,
    vaccine?:string,
    value:number
}

const ConsultationSchema = new Schema<Consultation>({
    client:{ 
        type: Schema.Types.ObjectId,
        ref: 'Client',
        required: true
    },
    animal:{ 
        type: Schema.Types.ObjectId,
        ref: 'Animal',
        required: true
    },
    vet:{
        type:Schema.Types.ObjectId,
        ref:'Vet',
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    service:String,
    exams:String,
    notes:String,
    returnDate:Boolean,
    vaccine:String,
    dewormer:String,
    value:{
        type:Number,
        required:true
    }
})

export const ConsultationModel = model<Consultation>('Consultation',ConsultationSchema)