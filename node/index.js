const express = require('express');
const app = express();
const port = 3000;
const config = {
	host: 'db',
	user: 'root',
	password: 'root',
	database: 'nodedb',
};
const mysql = require('mysql');
const connection = mysql.createConnection(config);

const sql = `CREATE TABLE IF NOT EXISTS people (id INT NOT NULL auto_increment, name VARCHAR(255), PRIMARY KEY (id));`;
connection.query(sql);

const saveDb = async () => {
	const sql = `INSERT INTO people(name) values('Junior Paz')`;
	await connection.query(sql);
};

app.get('/', async (req, res) => {
	await saveDb();
	res.send('<h1>Full Cycle Rocks!</h1> \n - Lista de nomes cadastrada no banco de dados.');
});

app.listen(port, () => {
	console.log('Rodando na porta ' + port);
});
