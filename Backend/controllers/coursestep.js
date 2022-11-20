const mysqlConnection = require('../database/Sqlconnect')

class Course {
    async search(req, res) {
        const {dbname} = req.body
        mysqlConnection.query(`select * from ${dbname}`, (err, rows) => {
            if (!err) {
                res.status(200).send(rows);
            } else {
                res.status(502).send("Db error");
            }
        })
    }
    async add(req, res) {
        const {id,name} = req.body
        mysqlConnection.query(`INSERT INTO courses VALUES (${id}, "${name}")`, (err, rows) => {
            if (!err) {
                res.status(200).send(rows);
            } else {
                res.status(502).send("Db error");
            }
        })
    }
    async del(req, res) {
        const {id,name} = req.body
        mysqlConnection.query(`DELETE FROM courses WHERE id=${id};`, (err, rows) => {
            if (!err) {
                res.status(200).send(rows);
            } else {
                res.status(502).send("Db error");
            }
        })
    }
    async upd(req, res) {
        const {id,newname} = req.body
        mysqlConnection.query(`UPDATE courses SET name = "${newname}" WHERE id = ${id};`, (err, rows) => {
            if (!err) {
                res.status(200).send(rows);
            } else {
                res.status(502).send("Db error");
            }
        })
    }
}

module.exports = new Course();