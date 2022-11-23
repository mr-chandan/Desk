const mysqlConnection = require('../database/Sqlconnect')

class Stepone {
    async search(req, res) {
        const { name } = req.body
        mysqlConnection.query(`select * from ${name}`, (err, rows) => {
            if (!err) {
                res.status(200).send(rows);
            } else {
                res.status(502).send("Db error");
            }
        })
    }
    async add(req, res) {
        const { formData, storedata } = req.body
        var quearylist = `INSERT INTO ${storedata} (SEM_Num)VALUES ("${storedata}_${formData}");`
        quearylist += `CREATE TABLE ${storedata}_${formData}_subjects ( id int NOT NULL auto_increment, subject varchar(50) NOT NULL unique,PRIMARY KEY (id));`
        quearylist += `CREATE TABLE ${storedata}_${formData}_languages ( id int NOT NULL auto_increment,languages varchar(50) NOT NULL unique,PRIMARY KEY (id));`
        quearylist += `create table ${storedata}_${formData}_STUDENTINFO( ID int Not null auto_increment, NAME varchar(50) Not null,SECTION varchar(50) Not null,EMAIL varchar(50) Not null unique,PASSWORD varchar(50) Not null,LANGUAGE int Not null,primary key(id),FOREIGN KEY (LANGUAGE) REFERENCES ${storedata}_${formData}_languages(id));`
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
        const { pdata, tbname } = req.body
        var quearylist = `DELETE FROM ${tbname} WHERE id=${pdata.id};`
        quearylist += `drop table ${pdata.SEM_Num}_STUDENTINFO;`
        quearylist += `drop table ${pdata.SEM_Num}_subjects;`
        quearylist += `drop table ${pdata.SEM_Num}_languages;`
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
        const { storedata, formData, oldstoredata } = req.body
        if (formData.id) {
            return res.status(404).json();
        }
        var quearylist = `UPDATE ${storedata} SET SEM_Num = "${storedata}_${formData}" WHERE id = ${oldstoredata.id};`
        quearylist += `RENAME TABLE ${oldstoredata.SEM_Num}_languages TO ${storedata}_${formData}_languages;`
        quearylist += `RENAME TABLE ${oldstoredata.SEM_Num}_subjects TO ${storedata}_${formData}_subjects;`
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

module.exports = new Stepone();