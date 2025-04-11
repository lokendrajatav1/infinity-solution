const mongoose = require('mongoose');

const connectDatabase = async () => {

        await mongoose.connect("mongodb+srv://Sakshi9926:InfinitySolution@infinitysolution.jehpauq.mongodb.net/?retryWrites=true&w=majority&appName=InfinitySolution");
        console.log("Connected to MongoDB");
  
        // await mongoose.connect("mongodb+srv://anishgehlot25:admin@cluster0.ocdrl.mongodb.net/retryWrites=true&w=majority");
        // console.log("Connected to MongoDB");
}

module.exports = connectDatabase;
