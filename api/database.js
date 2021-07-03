import mysql from "mysql";
import express from "express"
import cityRoute from "./route/city.js";

const app = express();

// create connect
export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'bitirme',
    password: ''
});

//database connect info
db.connect(function (err) {
    if (err) throw err;
    console.log("Server is connected!");
});

//city Router
app.use("/city",cityRoute);

// Opening port
app.listen('5000', () => {
    console.log('server started on port 5000');
});











