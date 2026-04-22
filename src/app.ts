import 'dotenv/config'
import express from 'express'
import connectDB from './config/database'
import cors from 'cors'
import path from 'path'
import authRoutes from './routes/authRoutes'

connectDB()

const __dirname = import.meta.dirname;
const __filename = import.meta.filename

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, '..', "public")))
// Tem que adicionar origin no cors
app.use(cors())
//Adicionando rotas criadas 
app.use('/api/auth',authRoutes)


app.post('/admin/login', (req, res) => {
    console.log(req.body)

    res.status(200).json({
        user: { name:'Admin', email: req.body.email },
        token: 'token_teste'
    })
});

app.listen(PORT, () => console.log(`O servidor está na PORT: ${PORT}`))