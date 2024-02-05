const express = require("express");
const router = express.Router();
const pool = require("../db/connection")
const mysql = require('mysql')



router.post('/createuser', async (req, res) => {

    const {UserId, name} = req.body
    const sqlInsert = "insert into user_deatils value(?, ?)"
    const insert_query = mysql.format(sqlInsert, [UserId, name ])

    const user = pool.query( async (err, result) => {
        // console.log(user,"u");
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

router.get('/getdata/:id', (req, res) => {

    const UserId = req.params.id;
    console.log(UserId);
    pool.query('select * from user_deatils where UserId = ?', UserId, (err, result) => {
        if (err) {
            res.send(err)
            console.log(err);
        }
        else {
            res.send(result)
            console.log(result);
        }
    })
});
router.get('/getdata', (req, res) => {

    pool.query('select * from user_deatils ', (err, result) => {
        if (err) {
            res.send(err)
            console.log(err);
        }
        else {
            res.send(result)
            console.log(result);
        }
    })

});
router.delete('/deletedata/:id', (req, res) => {

    const deleteId = req.params.id;
    const query ='DELETE user_deatils FROM user_deatils INNER JOIN ticket_assign ON ticket_assign.tiketId = user_deatils.UserId WHERE user_deatils.UserId = ?;'
    pool.query(query, deleteId, (err, result) => {
        if (err) {
            res.send(err)
            console.log(err);
        }
        else {
            res.send("DELETED")
            console.log(result);
        }
    })

});

router.put('/updatedata/:id', (req, res) => {

    const { name} = req.body
    const updatequery = 'UPDATE user_deatils SET name = ? where UserId = ?';
    const value = [ name, req.params.id ]
    console.log(req.params.id);
    pool.query(updatequery, value, (err, result,) => {
        if (err) {
            res.send(err)
            console.log(err);
        }
        else {
            res.send("Updated")
            console.log(result);
        }
    })

});

router.get('/getticketassign/:id', (req, res) => {

    const details = 'SELECT * FROM user_deatils INNER JOIN ticket_assign ON ticket_assign.tiketId = user_deatils.UserId WHERE user_deatils.UserId = ?;'
    pool.query(details, req.params.id, (err, result) => {
        if (err) {
            res.send(err)
            console.log(err);
        }
        else {
            // res.send("Details")
            res.json({result})
            console.log(result);
        }
    })

});

module.exports = router;