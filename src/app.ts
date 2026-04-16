import 'dotenv/config'
import express from 'express'
import connectDB from './config/database'
import cors from 'cors'
import path from 'path'

connectDB()

const __dirname = import.meta.dirname;
const __filename = import.meta.filename

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, '..', "public")))
app.use(cors())
// Tem que adicionar origin


app.get('/teste', (req, res) => {
    // Teste de Objeto Json
    res.json({
        mensagem: "Teste de mensagem",
        usuario: "dados do usuario",
        status: "Ativo"
    });
});

app.listen(PORT, () => console.log(`O servidor está na PORT: ${PORT}`))