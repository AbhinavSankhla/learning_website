const Subject = require("../../model/Subject/Subject");

const addSubject = async(req,res) => {
    try {
        const {name} = req.body;

        const nameExist = await Subject.findOne({name});
        if (nameExist) {
            return res.status(400).json({ message: 'subject already exists' });
        }

        const dataToInsert = new Subject({name})
        const response = await dataToInsert.save()

        res.status(200).json({message: 'subject inserted successfully', data: response});
    } 
    catch (error) {
        res.status(500).json({message: 'internal server error'});
        console.log(error)
    }
}

module.exports = addSubject;