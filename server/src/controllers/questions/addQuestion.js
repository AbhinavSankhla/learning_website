const Question = require("../../model/question/Question");

const addQuestion = async(req,res) => {
    try {
        console.log(req.body)
        const {questionText, options, correctAnswer, stream, subject, topic, difficulty, explanation, marks} = req.body;

        const dataToInsert = new Question(
            {
                questionText, 
                options, 
                correctAnswer, 
                stream, 
                subject, 
                topic, 
                difficulty, 
                explanation,
                marks
            }
        )
        const response = await dataToInsert.save()

        res.status(200).json({message: 'Question inserted successfully', data: response});
    } 
    catch (error) {
        res.status(500).json({message: 'internal server error'});
        console.log(error)
    }
}

module.exports = addQuestion;