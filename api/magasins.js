const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'https://databases.000webhost.com/index.php',
    user: 'id21691480_phonerelax',
    password: '12ff663S!',
    database: 'id21691480_prx'
});

router.get("/", (req, res) => {
    console.log("zz");
    const i = req.query.id;

    if (i) {
        connection.query(`SELECT * FROM magasins WHERE idMagasin=${i}`, (err, rows) => {
            if (!err) res.send(rows);
            else res.status(500).send({ error: 'Internal Server Error' });
        });
    } else {
        connection.query(`SELECT * FROM magasins ORDER BY idMagasin ASC`, (err, rows) => {
            if (!err) res.send(rows);
            else res.status(500).send({ error: 'Internal Server Error' });
        });
    }
});

module.exports = router;