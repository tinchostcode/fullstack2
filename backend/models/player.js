const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({

  lastname:{type: String, required: true},
  name:{type: String, required: true},
  //dni:{type: String,  required: true,unique: true},
  height:{type: Number},
  age:{type: Number},
  hand:{type: String},
  position:{type: String},
  partner:{type: mongoose.Schema.Types.ObjectId,ref: 'Player'},
  //category:{type: String},ranking: {type: Number},
  //tour_played:{type: Number},tour_won:{type: Number},
  phone:{type: String},
  city:{type: mongoose.Schema.Types.ObjectId,ref: 'City'},
  email:{type: String,unique:true},
}, 

{ timestamps: true, 
  versionKey: false 
});

const Player = mongoose.model('Player', PlayerSchema);

module.exports = Player;
