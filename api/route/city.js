import express from "express";
import expressAsyncHandler from "express-async-handler";
import { db } from "../database.js";


const cityRoute = express.Router();

//show cities
cityRoute.get('/', expressAsyncHandler(async (req, res) => {
    const sqlselect = "SELECT * FROM cities";
    db.query(sqlselect, (err, result) => {
        if (err) throw err;
        res.send(result)
    })
    // res.send('')
}));

//show filter:districts
cityRoute.get('/:id', expressAsyncHandler(async (req, res) => {
    const id = req.params.id;
    const sqlselect = `SELECT * FROM districts WHERE city_id=${id}`;
    db.query(sqlselect, (err, result) => {
        if (err) throw err;
        res.send(result)
    })
    // res.send('')
}));

cityRoute.get('/squareself/:id', expressAsyncHandler(async (req, res) => {
    const id = req.params.id;
    const sqlselect = `SELECT * FROM squares WHERE id=${id}`;
    db.query(sqlselect, (err, result) => {
        if (err) throw err;
        res.send(result)
    })
    // res.send('')
}));


//show filter:squares
cityRoute.get('/square/:id', expressAsyncHandler(async (req, res) => {
    const id = req.params.id;
    const sqlselect = `SELECT * FROM squares WHERE district_id=${id}`;
    db.query(sqlselect, (err, result) => {
        if (err) throw err;
        res.send(result)
    })
    // res.send('')
}));




export default cityRoute;