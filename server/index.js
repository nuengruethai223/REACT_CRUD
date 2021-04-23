const express = require("express");
const app = express();
const mysql = require("mysql");
// cors มาจาก corss origin resource sharing เป็นการอนุญาต/ไม่อนุญาต การขอใช้ทรัพยากร
const cors = require("cors");
const bodyParser = require("body-parser");

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "registering",
});
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/showregistering", (req, res) => {
  db.query("SELECT * FROM `registering`", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.post("/registering", (req, res) => {
  const f_name = req.body.F_name;
  const l_name = req.body.L_name;
  const email = req.body.Email;
  const position = req.body.Position;
  const age = req.body.Age;
  const country = req.body.Country;
  const password = req.body.Pass;
  const Cpassword = req.body.C_pass;

  const sqlInsert =
    "INSERT INTO registering (f_name, l_name, email, position, country, age, pass, c_pass) VALUES (?,?,?,?,?,?,?,?)";
  db.query(
    sqlInsert,
    [f_name, l_name, email, position, country,age, password, Cpassword],
    (err, result) => {
      console.log(err);
    }
  );
});

app.listen("3001", () => {
  console.log("server is running on port 3001");
});
