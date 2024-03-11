const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/moviedb", { useNewUrlParser: true,
useUnifiedTopology: true,
// useCreateIndex: true,
 //useFindAndModify: true
 })
.then(()=> console.log("CONNECTION SUCCESSFULL............."))
.catch((err)=> console.log(err));

module.exports=mongoose;
