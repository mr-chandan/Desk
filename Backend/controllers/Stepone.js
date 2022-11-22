const mysqlConnection = require('../database/Sqlconnect')

class Stepone {
    async search(req, res) {
        const {name} = req.body
        mysqlConnection.query(`select * from ${name}`, (err, rows) => {
            if (!err) {
                res.status(200).send(rows);
            } else {
                res.status(502).send("Db error");
            }
        })
    }
    async add(req, res) {
        const {formData,storedata} = req.body
        mysqlConnection.query(`INSERT INTO ${storedata} (SEM_Num)VALUES ("${formData}")`, (err, rows) => {
            if (!err) {
                res.status(200).send(rows);
            } else {
                res.status(502).send("Db error");
            }
        })
    }
    async del(req, res) {
        const {pdata,tbname} = req.body
        console.log(req.body)
        mysqlConnection.query(`DELETE FROM ${tbname} WHERE id=${pdata};`, (err, rows) => {
            if (!err) {
                res.status(200).send(rows);
            } else {
                res.status(502).send("Db error");
            }
        })
    }
    async upd(req, res) {
        const {storedata,formData,id} = req.body
        mysqlConnection.query(`UPDATE ${storedata} SET SEM_Num = "${formData}" WHERE id = ${id};`, (err, rows) => {
            if (!err) {
                res.status(200).send(rows);
            } else {
                res.status(502).send("Db error");
            }
        })
    }
}

module.exports = new Stepone();