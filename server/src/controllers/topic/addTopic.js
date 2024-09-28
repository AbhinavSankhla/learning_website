const Topic = require("../../model/Topic/Topic");

const addTopic = async(req,res) => {
    try {
        const {name} = req.body;

        const nameExist = await Topic.findOne({name});
        if (nameExist) {
            return res.status(400).json({ message: 'topic already exists' });
        }

        const dataToInsert = new Topic({name})
        const response = await dataToInsert.save()

        res.status(200).json({message: 'topic inserted successfully', data: response});
    } 
    catch (error) {
        res.status(500).json({message: 'internal server error'});
        console.log(error)
    }
}

module.exports = addTopic;