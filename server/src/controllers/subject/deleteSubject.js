const Subject = require("../../model/Subject/Subject");

const deleteSubject = async(req,res) =>{
    try 
    {
        const response = await Subject.findOneAndDelete(req.params);
        
        if(response === null) return res.status(402).json({message: 'subject id does not exist'})
 
        res.status(200).json({message: 'subject deleted successfully'})
    } 
    catch (error) 
    {
        console.log(error)
        if(error.reason) return res.status(400).json({message: 'invalid stream id'}) 
        res.status(500).json({message: 'internal server error'})
    }
}

module.exports = deleteSubject;