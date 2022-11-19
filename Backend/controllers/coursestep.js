const mysqlConnection = require('../database/Sqlconnect')

class Course {
    async search(req, res) {
        const {dbname} = req.body
        mysqlConnection.query(`select * from ${dbname}`, (err, rows) => {
            if (!err) {
                res.send(rows)
            } else {
                console.log(err);
            }
        })
    }
    async add(req, res) {
        const {id,name} = req.body
        mysqlConnection.query(`INSERT INTO courses VALUES (${id}, "${name}")`, (err, rows) => {
            if (!err) {
                res.send(rows)
            } else {
                res.send(err);
            }
        })
    }
}

module.exports = new Course();