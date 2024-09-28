const Question = require("../../model/question/Question");

const deleteQuestion = async(req,res) =>{
    try 
    {
        const response = await Question.findOneAndDelete(req.params);
        
        if(response === null) return res.status(402).json({message: 'question id does not exist'})
 
        res.status(200).json({message: 'question deleted successfully'})
    } 
    catch (error) 
    {
        console.log(error)
        if(error.reason) return res.status(400).json({message: 'invalid question id'}) 
        res.status(500).json({message: 'internal server error'})
    }
}

module.exports = deleteQuestion