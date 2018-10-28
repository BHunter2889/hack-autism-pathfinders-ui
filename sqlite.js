const sql = require('sql.js');
const fs = require('fs')
const crypto=require('./crypto')
const {convert,switchKeys}=require('./convertSqliteResult')
// Create a database
const db = new sql.Database();
// NOTE: You can also use new sql.Database(data) where
// data is an Uint8Array representing an SQLite database file

// Execute some sql
db.run(fs.readFileSync('./sqliteMigration/1_create_initial.sql','utf8')); // Run the query without returning anything
//const rows = res.map(obj=>obj.columns.reduce((accum,col)=>{[col]:}))
//console.log(rows)
/*
const insertDoc = db.prepare(`INSERT INTO Docs (title,category) VALUES (:title,:category)`)
insertDoc.bind(['hello','category`'])
insertDoc.step();
insertDoc.free();
*/

//write to an encrypted file
var data = db.export();
fs.writeFileSync('myEncryptedDb.sqlite',crypto.encrypt(new Buffer(data)))
//const enc=fs.readFileSync('db.encrypted')
const enc=fs.readFileSync('myEncryptedDb.sqlite')
//console.log(enc)
var fileBuffer = crypto.decrypt(enc)
//console.log(fileBuffer)
const newDb = new sql.Database(fileBuffer)
const res=newDb.exec(`SELECT * FROM form_template`)

const rows=convert(res)
//const ready=switchKeys({id:'id',form_template_id:'formTemplateId',data:'data'},rows)
const ready=switchKeys({category:'bogus',title:'nomme',id:'id'},rows)
console.log(JSON.stringify(ready,null,2))

//var selectDocs = newDb.prepare("SELECT * FROM Docs WHERE id=:id");
//
//console.log(selectDocs.getAsObject({':id':1}))
//selectDocs.free();


const driveUploader = require('./driveUploader')
async function upload() {
console.log('uploading...')
  const token ="ya29.GlxEBi-7-G9hcCq80lmKBKrWc90tXbI9JtVl4gZQlKXmcD4uvLJDMPFrz8Drlm94N8g6bSzztW6tSmDySuHDkfbFp-PJSzJR4pMLE64MdMQaUpseZ5vyRV2MnngurQ"
  const folderResponse = await driveUploader.makeFolder('PATHbinder',token)
  console.log(folderResponse.data.id)
  await driveUploader.uploadToDrive(
    crypto.encrypt(new Buffer(data)),
    'db.encrypted',
    folderResponse.data.id,
    token,
    (err,result)=>{
    console.log('got here now')
    })
}

//upload();
//setTimeout(()=>{console.log('done'),2000})