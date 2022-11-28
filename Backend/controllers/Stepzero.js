const { ConnectAppContext } = require('twilio/lib/rest/api/v2010/account/connectApp');
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
        mysqlConnection.query(`INSERT INTO courses (courses)VALUES ("${name}")`, (err, rows) => {
            if (!err) {
                mysqlConnection.query(`CREATE TABLE ${name} (
                    id int NOT NULL auto_increment,
                    Sem_Name varchar(50) NOT NULL unique,
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
        const { id, courses } = req.body
        var quearylist = `DELETE FROM courses WHERE id=${id};`
        quearylist += `drop table ${courses};`
        try {
            mysqlConnection.query(quearylist, function (err, results, rows) {
                if (!err) {
                    res.status(200).send(rows);
                } else {
                    res.status(502).send("Db error");
                    console.log(err)
                    console.log(results)
                }
            });
        } catch (error) {
            console.log(error)
        }
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