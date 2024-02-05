const express = require("express");
const router = express.Router();
const pool = require("../db/connection")
const mysql = require('mysql')


router.post('/ticketassign', async (req, res) => {

    const {tiketId, issue_description, assignedTo, raisedTo} = req.body

    const sqlSearch = "SELECT * FROM ticket_assign WHERE tiketId = ?"
    const search_query = mysql.format(sqlSearch, [tiketId])
    const sqlInsert = "insert into ticket_assign value(?, ?, ?, ?)"
    const insert_query = mysql.format(sqlInsert, [ tiketId, issue_description, assignedTo, raisedTo])

    const user =  pool.query(search_query, async (err, result) => {
                  console.log(user,"u");
            pool.query(insert_query, (err, result) => {
            if (err)
                throw (err);
            console.log("--------> Created new User");
            console.log(result);
            res.status(200).send("Created Sucessfully !!!");
            
        })
     }
    )
    })

module.exports = router