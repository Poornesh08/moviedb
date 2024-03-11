const express = require('express')
const dbase=require('./config/dbconnection');
const route=require('./router/movierout')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.send("namaskaragalu........");
})
app.listen(5000, () => {
    console.log("Server is running on the port : 5000");
});

app.use('/movies',route);
