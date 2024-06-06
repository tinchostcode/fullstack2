// los models la primera letra con Mayuscula . Producto.js
const mongoose=require('mongoose');
 
const validRoles = {
    values: ['ADMIN_ROLE', 'USER_ROLE', 'MANAGER_ROLE']
}
 const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
  lastname: {    type: String,    required: true,  },
  name: {    type: String,    required: true,  },
  dni: {
    type: String,
    required: true,
    unique: true,
  },
  height: {
    type: Number,
  },
  age: {
    type: Number,
  },
  hand: {
    type: String,
  },
  position: {
    type: String,
  },
  partner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player',
  },
  category: {
    type: String,
  },
  ranking: {
    type: Number,
  },
  tour_played: {
    type: Number,
  },
  tour_won: {
    type: Number,
  },
  phone: {
    type: String,
  },
  city: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'City',  // Asumiendo que tienes una colección City
  },
  points: {
    type: Number,
  },
  email: {
    type: String,
    unique: true,
  },
});

const Player = mongoose.model('Player', PlayerSchema);
module.exports = Player;

    {timestamps:true, versionKey:false});

module.exports=mongoose.model('player',PlayerSchema);