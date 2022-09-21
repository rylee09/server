const db = require("../models/dbcon");

exports.getUsers = (req, res) => {
  let sql = "SELECT * FROM accounts";

  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    } else {
      res.send(result);
    }
  });
};

exports.updateUser = (req, res) => {
  // we want to pass in username into the body of the request
  const { question } = req.body;
  console.log(question);
  res.json("his birthday is on the 8th of april");
};

exports.getUser = (req, res) => {
  console.log("test");
  const { username } = req.params;
  console.log(username);
  res.send(username);
};

// create a method for adding new user
exports.addUser = (req, res) => {
  const { username } = req.body;
  console.log(username);
  res.send("admin");
};
