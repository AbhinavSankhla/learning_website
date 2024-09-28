const Topic = require("../../model/Topic/Topic");

const readTopic = async(req,res) =>{
    try {
        const response = await Topic.find();

        res.status(200).json({message: 'data fetched successfully', data: response})              
    } 
    catch (error) {
        console.log(error)
        res.status(500).json({message: 'internal server error'})      
    }
};

module.exports = readTopic;