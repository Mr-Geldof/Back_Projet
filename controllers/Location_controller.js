const Location = require("../model/Location_model");

module.exports.newLocation = async (req,res) =>{
    const {description, prix, adresse, téléphone,image} = req.body;

    try{
        const location = await Location.create({description, prix, adresse, téléphone,image});
        res.status(201).json(`Location Added successfully ${location}`)
    }
    catch(err){
        res.status(500).json(`Message ${err}`)
    }
}

module.exports.allLocation = async (req, res) => {
    try {
        const location = await Location.find();
        res.status(200).json(location)
    }
    catch(err){
        res.status(500).json(`message ${err}`)
    }
}

module.exports.showLocation = async (req, res) => {
    try {
        const location = await Location.findById(req.params.id);
        res.status(200).json(location)
    }
    catch(err){
        res.status(500).json(`message : ${err}`)
    }
}

module.exports.updateLocation = async (req , res) => {
    try{
        const location = await Location.findByIdAndUpdate(
            {_id : req.params.id} ,
            {
                $set: {
                    description: req.body.description,
                    prix: req.body.prix,
                    adresse: req.body.adresse,
                    téléphone: req.body.téléphone,
                    image: req.body.image,
                }
            },
            { new : true},
        );
        res.status(200).json({
            message: 'Update location',
            location
        })
        console.log(location)
    } catch (err) {
        res.status(500).send({ message: err });
      }
}

module.exports.removeLocation = async (req, res) => {
    await Location.remove({_id : req.params.id}).exec();
    res.status(200).send("Location deleted") 
}