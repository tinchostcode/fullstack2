const Player= require("../models/Player")


const crearPlayer= async (req,res = Response) => {
   
   try {
    let player;
    //creamos el producto

    player = new Player(req.body)

    await player.save();
    res.send(player);
    
   } catch (error) {
    console.log(error);
    res.status(500).send('hubo un error');
}

   
}



const obtenerPlayers = async (req, res) => {
  try {
    const players = await Player.find().populate('partner').populate('city');
    res.status(200).send(players);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { crearPlayer, obtenerPlayers };

