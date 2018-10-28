const FormData = require('form-data')
const util=require('util');


function uploadToDrive(dataBuffer,filename,folderId,token,cb) {
  const form = new FormData()
  form.append('media',dataBuffer)
  form.submit({
    host:'www.googleapis.com',
    path:'/upload/drive/v2/files',
    protocol:'https:',
    headers:{'Authorization':`Bearer ${token}`}
  },(err,res)=>{
  if(err) {
    console.log('error uploading file is', err)
    cb(err)
  }
  else if(res) {
    var body = '';
    res.on('data', function(chunk) {
      body += chunk;
    });
    res.on('end', function() {
      try {
        body =JSON.parse(body)
        doMetadataStuff(body.id,folderId,body.parents[0].id,filename,token).then((res2)=>{
//          console.log('second response\'s data: ',res2.data)
//console.log('it just works')
          cb(null,res2)
        }).catch(err=>{
          console.log('error with second call: ',err)
        })
//        console.log(body);
          console.log('body id is ',body.id)
//          console.log('body selfLink is ',body.selfLink)
//          console.log('body webViewLink is ',body.webViewLink)
//          console.log('body thumbnailLink is ',body.thumbnailLink)
//          console.log('body downloadUrl is ',body.downloadUrl)
//          console.log('body parents is ',body.parents.map(p=>p.id))
      } catch(err) {
        console.log(body)
        cb(err)
       }
    });
  }


  })
}

const axios = require('axios')
const querystring = require('querystring')
function doMetadataStuff(fileId,folderId,oldFolderId,filename,token) {
  const q = querystring.stringify({
    addParents:folderId,
    removeParents:oldFolderId
  });
  return axios.put(
    `https://www.googleapis.com/drive/v2/files/${fileId}?${q}`,
    {title:filename},{
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
}

async function makeFolder(folderName,token,parentFolderId) {
    let otherOption={}
    if(parentFolderId) {
      otherOption = {parents:[parentFolderId]}
    }
//    console.log('options are ',{title:folderName,mimeType:'application/vnd.google-apps.folder',...otherOption})
    const response = await axios.post(
      `https://www.googleapis.com/drive/v2/files`,
      {title:folderName,mimeType:'application/vnd.google-apps.folder'},{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      console.log('response parents is',response.data.parents[0].id)

    if(parentFolderId) {
      const q = querystring.stringify({
          addParents:parentFolderId,
          removeParents:response.data.parents[0].id
        });
      const patchRes= await axios.patch(
        `https://www.googleapis.com/drive/v2/files/${response.data.id}?${q}`,
        {},{
          headers:{
            Authorization:`Bearer ${token}`
          }
        })
        console.log('patched')
        return patchRes
    } else {
      return response
    }
}

const crypto = require('./crypto')
const sql = require('sql.js');
const fs= require('fs')

async function downloadFromDrive(fileId,token) {
console.log('id: ',fileId)
console.log('token: ',token)
console.log('url',`https://www.googleapis.com/drive/v3/files/${fileId}?acknowledgeAbuse=true`)
//  const response = await axios.get(`https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`,
//          {},{
//            headers:{
//              Authorization:`Bearer ${token}`
//            }
//          }).catch(e=>{
//            console.log(e)
//            return Promise.resolve({data:'nothing'})
//          })
//          try {
//              console.log('decrypting...',response)
//              const fileBuffer=crypto.decrypt(response)
//              console.log('databasing...',fileBuffer)
//              const newDb = new sql.Database(fileBuffer)
//              console.log('success!')
//              return newDb
//          } catch(err) {
//           console.log(body)
//           return Promise.reject(err)
//          }
//const res = await axios({
//  method:'get',
//  url:`https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`,
//  headers:{Authorization:`Bearer ${token}`},
//  responseType:'stream'
//}).catch(e=>{
//            console.log(e)
//            return Promise.resolve({data:'nothing'})
//          })
//  console.log(res)
//return new Promise((resolve,reject)=>{
//  var body = '';
//  res.data.on('data', function(chunk) {
//      body += chunk;
//    });
//  res.data.on('end', function() {
//    try {
//    console.log('decrypting...',body)
//    const fileBuffer=crypto.decrypt(body)
//    console.log('databasing...',fileBuffer)
//    const newDb = new sql.Database(fileBuffer)
//    console.log('success!')
//    resolve(newDb)
//    } catch(err) {
//             console.log(body)
//             reject(err)
//            }
//  })
//})

const res = await axios({
  method:'get',
  responseType: 'arraybuffer',
  url:`https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`,
  headers:{Authorization:`Bearer ${token}`}
}).catch(e=>{
            console.log(e)
            return Promise.resolve({data:'nothing'})
          })
//          console.log(res.data)
//  console.log(res.data)
//  fs.writeFileSync('myEncryptedDb.sqlite',crypto.encrypt(new Buffer(data)))
//fs.writeFileSync('temp.json',res.data)
console.log(res.data)
  const fileBuffer=crypto.decrypt(res.data)
  console.log(fileBuffer)
  const newDb = new sql.Database(fileBuffer)
  return newDb
}

module.exports = {
  uploadToDrive:util.promisify(uploadToDrive),
  makeFolder,
  downloadFromDrive
}