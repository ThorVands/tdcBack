import express from 'express'
const router = express.Router()
import { Router } from 'express'


//Pagina principal do painel ADM
router.get('/', (req, res) => {
    res.render("admin/index.handlebars")
})

//Pagina de reservas de hospedagens
router.get('/bookings', (req, res) => {
    res.send("Pagina de reservas")
})

//Páginas de categorias
router.get('/teste', (req, res) => {
    res.send("Pagina de categorias")
})

export default router


