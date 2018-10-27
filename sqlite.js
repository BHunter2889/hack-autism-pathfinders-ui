const sql = require('sql.js');
const fs = require('fs')
const crypto=require('./crypto')
// Create a database
const db = new sql.Database();
// NOTE: You can also use new sql.Database(data) where
// data is an Uint8Array representing an SQLite database file

// Execute some sql
db.run(fs.readFileSync('./sqliteMigration/1_create_initial.sql','utf8')); // Run the query without returning anything
const insertDoc = db.prepare(`INSERT INTO Docs (title,category) VALUES (:title,:category)`)
insertDoc.bind(['hello',1])
insertDoc.step();
insertDoc.free();

//write to an encrypted file
var data = db.export();
fs.writeFileSync('myEncryptedDb.sqlite',crypto.encrypt(new Buffer(data)))
var fileBuffer = crypto.decrypt(fs.readFileSync('myEncryptedDb.sqlite'))
const newDb = new sql.Database(fileBuffer)
var selectDocs = newDb.prepare("SELECT * FROM Docs WHERE id=:id");

console.log(selectDocs.getAsObject({':id':1}))
selectDocs.free();
/*
[
	{columns:['a','b'], values:[[0,'hello'],[1,'world']]}
]
*/
//
//// Prepare an sql statement
//var stmt = db.prepare("SELECT * FROM hello WHERE a=:aval AND b=:bval");
//
//// Bind values to the parameters and fetch the results of the query
//var result = stmt.getAsObject({':aval' : 1, ':bval' : 'world'});
//console.log(result); // Will print {a:1, b:'world'}
//
//// Bind other values
//stmt.bind([0, 'hello']);
//while (stmt.step()) console.log(stmt.get()); // Will print [0, 'hello']
//
//// You can also use javascript functions inside your SQL code
//// Create the js function you need
//function add(a, b) {return a+b;}
//// Specifies the SQL function's name, the number of it's arguments, and the js function to use
//db.create_function("add_js", add);
//// Run a query in which the function is used
//db.run("INSERT INTO hello VALUES (add_js(7, 3), add_js('Hello ', 'world'));"); // Inserts 10 and 'Hello world'
//
//// free the memory used by the statement
//stmt.free();
//// You can not use your statement anymore once it has been freed.
//// But not freeing your statements causes memory leaks. You don't want that.
//
//// Export the database to an Uint8Array containing the SQLite database file
//var binaryArray = db.export();