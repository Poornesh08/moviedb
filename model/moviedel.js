const mongoose=require('mongoose')
const dbase= require('../config/dbconnection')

const movieSchema = mongoose.Schema(
    {
    titel: {
        type: String,
        require:true
     },
    year: {
        type: Number,
        require:true
    },
    genre:{
        type: String,
        require:true
  }
 },
    {
      // tablename: "moviedb",
       timestamps: true
    }
 );
 const Movies = mongoose.model('movielist',movieSchema);
 module.exports=Movies;
