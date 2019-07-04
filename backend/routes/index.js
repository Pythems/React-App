const mysql = require("mysql");
const express = require("express");
var router = express.Router();
const app = express();

const bodyparser = require("body-parser");

app.use(bodyparser.json());

const mysqlConnection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "to_do",
  multipleStatements: true
});

mysqlConnection.connect(err => {
  if (!err) console.log("database has connected");
  else console.log("there is an error");
});

router.get("/data", (req, res) => {
  mysqlConnection.query("Select * from datas", (err, rows, fields) => {
    if (!err) {
      //console.log(rows);
      res.send(rows);
    } else console.log(err);
  });
});

router.get("/data/:Task", (req, res) => {
  mysqlConnection.query(
    "Select * from datas where Task = ?",
    [req.params.Task],
    (err, rows, fields) => {
      if (!err) {
        //console.log(rows);
        res.send(rows);
      } else console.log(err);
    }
  );
});

router.delete("/data/:id", (req, res) => {
  mysqlConnection.query(
    "DELETE FROM datas  where id = ?",
    [req.params.id],
    (err, rows, fields) => {
      if (!err) {
        // console.log(rows);
        res.send("deleted successfully");
      } else console.log(err);
    }
  );
});
router.post("/data", (req, res) => {
  let tab = req.body;
  var sql =
    "SET @id = ?;SET @Task = ?;SET @InputDate = ?;SET @ReminderTime = ?; \
  CALL EntryAddOrEdit(@id, @Task,@InputDate,@ReminderTime);";
  mysqlConnection.query(
    sql,
    [tab.Task, tab.InputDate, tab.ReminderTime, tab.id],
    (err, rows, fields) => {
      if (!err)
        rows.forEach(element => {
          if (element.constructor == Array)
            res.send("Inserted id:" + element[0].id);
        });
      else console.log(err);
    }
  );
});
router.put("/data", (req, res) => {
  let tab = req.body;
  var sql =
    "SET @id = ?;SET @Task = ?;SET @InputDate = ?;SET @ReminderTime = ?; \
  CALL EntryAddOrEdit(@id, @Task,@InputDate,@ReminderTime);";
  mysqlConnection.query(
    sql,
    [tab.Task, tab.InputDate, tab.ReminderTime, tab.id],
    (err, rows, fields) => {
      if (!err) res.send("Updated Successfully");
      else console.log(err);
    }
  );
});

module.exports = router;
