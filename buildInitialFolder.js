const sql = require('sql.js');
const fs = require('fs')
const crypto=require('./crypto')
const driveUploader = require('./driveUploader')

async function buildInitialFolder(token) {
  const db = new sql.Database();
  db.run(fs.readFileSync('./sqliteMigration/1_create_initial.sql','utf8'));

  const folderResponse = await driveUploader.makeFolder('PATHbinder',token)
  const documentSubfolder = await driveUploader.makeFolder('Documents',token,folderResponse.data.id)
  console.log(folderResponse.data.id)
  console.log('uploading sqlite file to google drive...')
  const uploadResponse= await driveUploader.uploadToDrive(
    crypto.encrypt(new Buffer(db.export())),
    'db.encrypted',
    folderResponse.data.id,
    token);

  return {
    pathBinderFolder:folderResponse.data.id,
    documentSubfolder:documentSubfolder.data.id,
    sqlite:uploadResponse.data.id
  }
}


//buildInitialFolder("ya29.GlxEBgOO5-NdeS8JuPUVQiToFVl_0T3IO0HiDKceKJ64clX4wv6pgIXzstq-r5hEKxX6T0vp5fnKXiqf4KCryCNnxWNwckjhBblouB14vV8deMo28RcTi8XSfCN9nA")
//  .catch(e=>console.log(e))
module.exports=buildInitialFolder