import express from 'express'
import  mongoose from 'mongoose'
import dotenv from 'dotenv'
import router from './routes/routes.js'
//const cors = require('cors');

const app=express();
dotenv.config();

//const playerRoutes = require('./routes/player');
//app.use(cors({ origin: true, credentials: true }));

const port=process.env.PORT || 9000;



 mongoose
        .connect(process.env.MONGODB_URI)
        .then(() => console.log('Base Conectada...🚀'))
        .catch((error) =>console.error('ERROR AL CONECTAR 😪:',error)); 


//middlewares
app.use(express.json()); // habilitamos para recibir json  

//ruta principal
app.use('/api/products', router); 


app.listen(port,()=> console.log('server conectado..😄. en el puerto:',port))