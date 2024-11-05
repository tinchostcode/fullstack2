import express, { urlencoded } from 'express'
import  mongoose from 'mongoose'
import dotenv from 'dotenv'
import router from './routes/routes.js'
import cors from 'cors'
//const cors = require('cors');
const app=express();
dotenv.config();
app.use(cors());
app.use(express.json()); // habilitamos para recibir json  

app.unsubscribe(urlencoded({extended:true}))
app.use('/api/products', router); 

//const playerRoutes = require('./routes/player');


const port=process.env.PORT || 9000;



 mongoose
        .connect(process.env.MONGODB_URI)
        .then(() => console.log('Base Conectada...🚀'))
        .catch((error) =>console.error('ERROR AL CONECTAR 😪:',error)); 









app.listen(port,()=> console.log('server conectado..😄. en el puerto:',port))