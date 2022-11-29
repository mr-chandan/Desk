const mysqlConnection = require('../database/Sqlconnect')

class Steptwo {
    async search(req, res) {
        const {name} = req.body
        mysqlConnection.query(name, (err, rows) => {
            if (!err) {
                res.status(200).send(rows);
            } else {
                res.status(502).send("Db error");
            }
        })
    }
}

module.exports = new Steptwo();