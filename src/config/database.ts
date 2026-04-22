import 'dotenv/config'
import mongoose from 'mongoose'

// Conexão com o mongoDB Atlas
// e retorna se a conexão com bem sucedida
const connectDB = async () =>{   
    try{
        await mongoose.connect(process.env.MONGODB_URI || '')
        console.log('✅ MongoDB Atlas pronto para o DogCamp!')
    }catch(err){

        if(err instanceof Error) console.error('❌ Erro de conexão:', err.message)
        else console.error('❌ Ocorreu um erro inesperado:', err);
        
        process.exit(1)
    }
}

export default connectDB