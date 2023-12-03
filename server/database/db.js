const mongoose = require('mongoose');

function connectDB(){
  
  const mongoURL = "mongodb+srv://heliverse:heliverse@cluster0.rwaxjrh.mongodb.net/heliverse?retryWrites=true&w=majority";
  
  mongoose.connect(mongoURL, { family: 4 }) 
    .then(() => {
      console.log('Database connected successfully!');
    })
    .catch((err) => {
      console.error('Error connecting to the database', err);
      process.exit(1); // Exit the application if database connection fails
    });
}


module.exports = connectDB;