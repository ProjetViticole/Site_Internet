const mysql = require('mysql2');

const connexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // ou ton mdp si y’en a un
    database: 'projet agricole'
});

module.exports = connexion;
