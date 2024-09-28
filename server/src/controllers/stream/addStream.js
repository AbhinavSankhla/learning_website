const Stream = require("../../model/Stream/Stream");

const addStream = async(req,res) => {
    try {
        console.log(req.body)
        const {name} = req.body;

        // Check if the already exists
        const nameExist = await Stream.findOne({name});
        if (nameExist) {
            return res.status(400).json({ message: 'stream already exists' });
        }
         // Create a new stream
        const dataToInsert = new Stream({name})
        const response = await dataToInsert.save()

        res.status(200).json({message: 'stream inserted successfully', data: response});
    } 
    catch (error) {
        res.status(500).json({message: 'internal server error'});
        console.log(error)
    }
}

module.exports = addStream;