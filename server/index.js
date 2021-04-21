const express = require("express");
const app = express();
const mysql = require("mysql");
// cors มาจาก corss origin resource sharing เป็นการอนุญาต/ไม่อนุญาต การขอใช้ทรัพยากร
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "admin",
  host: "localhost",
  password: "admin",
  database: "registering",
});

app.get("/registering", (req, res) => {
  db.query("SELECT * FROM `registering`", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen('3001',() => {
    console.log('server is running on port 3001');

})
