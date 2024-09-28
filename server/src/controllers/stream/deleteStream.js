const Stream = require("../../model/Stream/Stream");

const deleteStream = async(req,res) =>{
    try 
    {
        const response = await Stream.findOneAndDelete(req.params);
        
        if(response === null) return res.status(402).json({message: 'stream id does not exist'})
 
        res.status(200).json({message: 'stream deleted successfully'})
    } 
    catch (error) 
    {
        console.log(error)
        if(error.reason) return res.status(400).json({message: 'invalid stream id'}) 
        res.status(500).json({message: 'internal server error'})
    }
}

module.exports = deleteStream;