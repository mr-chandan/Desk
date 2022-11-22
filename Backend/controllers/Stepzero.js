const mysqlConnection = require('../database/Sqlconnect')

class Stepzero {
    async search(req, res) {
        const { dbname } = req.body
        mysqlConnection.query(`select * from ${dbname}`, (err, rows) => {
            if (!err) {
                res.status(200).send(rows);
            } else {
                res.status(502).send("Db error");
            }
        })
    }
    async add(req, res) {
        const { id, name } = req.body
        mysqlConnection.query(`INSERT INTO courses (name)VALUES ("${name}")`, (err, rows) => {
            if (!err) {
                mysqlConnection.query(`CREATE TABLE ${name} (
                    id int NOT NULL auto_increment,
                    SEM_Num varchar(50) NOT NULL unique,
                    PRIMARY KEY (id)
                );`, (err, rows) => {
                    if (!err) {
                        res.status(200).send(rows);
                    } else {
                        res.status(502).send("Db error");
                    }
                })
            } else {
                res.status(502).send("Db error");
            }
        })
    }
    async del(req, res) {
        const { id, name } = req.body
        mysqlConnection.query(`DELETE FROM courses WHERE id=${id};`, (err, rows) => {
            if (!err) {
                mysqlConnection.query(`drop table ${name};`, (err, rows) => {
                    if (!err) {
                        res.status(200).send(rows);
                    } else {
                        res.status(502).send("Db error");
                    }
                })
            } else {
                res.status(502).send("Db error");
            }
        })
    }
    async upd(req, res) {
        const { id, newname, name } = req.body
        mysqlConnection.query(`UPDATE courses SET name = "${newname}" WHERE id = ${id};`, (err, rows) => {
            if (!err) {
                mysqlConnection.query(`RENAME TABLE ${name} TO ${newname};`, (err, rows) => {
                    if (!err) {
                        res.status(200).send(rows);
                    } else {
                        res.status(502).send("Db error");
                    }
                })
            } else {
                res.status(502).send("Db error");
            }
        })
    }
}

module.exports = new Stepzero();