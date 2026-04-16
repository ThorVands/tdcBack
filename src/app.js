// Carregando módulos
    import express from 'express'
    
// Substitua: import handlebars from 'express-handlebars'
// Por:
    import { engine } from 'express-handlebars';
//const bodyParser = require('body-parser')
    import bodyParser from 'body-parser'
    import { fileURLToPath } from 'url'
    import path from 'path'
    
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)
   
    const app = express()
    
// const mangoose = require('mongoose')

    //Variável que aponta o caminho das rotas dos arquivos ao diretório do modulo chamado (admin.js)
    import admin from "./routes/admin.js"


    // Configurações  
      // body Parser
        app.use(bodyParser.urlencoded({extended: true}))
        app.use(bodyParser.json())
    // Handlebars    
        // Antes: app.engine('handlebars', handlebars({defaultLayout: 'main'}))
            app.engine('handlebars', engine({
              defaultLayout: 'main'
            }));
             
            app.set('view engine', 'handlebars');
    // Mongoose
        //Em breve
    
    //public
        // Caminho Absoluto para o diretório public  
            app.use(express.static(path.join(__dirname, "public")))
        
    //Rotas
            
            app.use('/admin', admin)


// Outros
const PORT = 8081
app.listen(PORT,() => {
    console.log("Servidor rodando Carlos! ")
})   