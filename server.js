const mysql = require('mysql2');
const inquirer = require('inquirer');
const table = require('console.table');
require('dotenv').config();

const connection = mysql.createConnection(
  {
    host: 'localhost',
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: 'employee_db',
  },
  console.log('Connection established')
);

connection.connect(function (err) {
  if (err) throw err;
  console.log('SQL connected');
  start();
});
