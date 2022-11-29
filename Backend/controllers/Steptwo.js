const mysqlConnection = require('../database/Sqlconnect')

class Steptwo {
    async search(req, res) {
        const { name } = req.body
        mysqlConnection.query(name, (err, rows) => {
            if (!err) {
                res.status(200).send(rows);
            } else {
                res.status(502).send("Db error");
            }
        })
    }
    async add(req, res) {
        const { query } = req.body
        var quearylist = query
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
    async del(req, res) {
        const { query } = req.body
        var quearylist = query
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
}

module.exports = new Steptwo();