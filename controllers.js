const fs=require('fs')
const {downloadFromDrive,uploadToDrive}=require('./driveUploader')
const {convert,switchKeys}=require('./convertSqliteResult')
const crypto=require('./crypto')
const {pool,query}=require('./query')
//getDocs can be invoked at /api/docs
async function getDocs(req,res) {
  res.json([
    {id:1234,title:"title1",category:"cat1",path:"http://www.example.com"},
    {id:1234,title:"title2",category:"cat2",path:"http://www.example.com"},
    {id:1234,title:"title3",category:"cat1",path:"http://www.example.com"},
    {id:1234,title:"title4",category:"cat3",path:"http://www.example.com"}
  ])
}
//getPrintableDocs can be invoked at /api/printableDocs
async function getPrintableDocs(req,res) {
  res.contentType('application/pdf')
  res.end(fs.readFileSync('./test.pdf'),'binary')
}
//getForms can be invoked at /api/forms
async function getForms(req,res) {
  if(req.user) {
  console.log('1')
      const sqliteDb=await downloadFromDrive(req.user.sqlite_file_id,req.user.token)
  console.log('2',sqliteDb)
      const result=sqliteDb.exec(`SELECT * FROM form`)
  console.log('3',result)
      const rows=convert(result)
  console.log('4')
      const ready=switchKeys({id:'id',form_template_id:'formTemplateId',data:'data'},rows)
  console.log('5')
      res.json(rows)
    }  else {
//      res.send('you are NOT logged in')
        res.json([
            {id:1234,title:"title4",category:"cat3",data:{'foo':'bar'}},
            {id:1234,title:"title3",category:"cat3",data:{'foo':'bar'}},
            {id:1234,title:"title2",category:"cat2",data:{'foo':'bar'}},
            {id:1234,title:"title1",category:"cat1",data:{'foo':'bar'}}
          ])
    }
}
//getForm can be invoked at /api/form/:id
async function getForm(req,res) {
  if(req.user) {
    const sqliteDb=await downloadFromDrive(req.user.sqlite_file_id,req.user.token)
    const result=sqliteDb.exec(`SELECT * FROM form where id=${req.params.id}`)
    const rows=convert(result)
    const ready=switchKeys({id:'id',form_template_id:'formTemplateId',data:'data'},rows)
    res.json(rows[0])
  }  else {
//      res.send('you are NOT logged in')
      res.json({
          title:'title1',category:'category 1',data:{foo:'bar',baz:'buzz'},createdOn:new Date(),updatedOn:new Date(),templateId:1
        })
  }
}
//getEvents can be invoked at /api/events
async function getEvents(req,res) {
  res.json(JSON.parse(fs.readFileSync('./calendarResponse.json','utf8')))
}
//getTeam can be invoked at /api/team
async function getTeam(req,res) {
  res.json([
  {
    imgUrl:'https://raw.githubusercontent.com/Infernus101/ProfileUI/0690f5e61a9f7af02c30342d4d6414a630de47fc/icon.png',
    email:'test@example.com',
    address:'123 mockingbird lane',
    name:'Dr. Bob',
    fax:'321-321-1234',
    phone:'314-321-3322',
    description:'Primary care physician'
  },
  {
    imgUrl:'https://raw.githubusercontent.com/Infernus101/ProfileUI/0690f5e61a9f7af02c30342d4d6414a630de47fc/icon.png',
    email:'test@example.com',
    address:'125 mockingbird lane',
    name:'Jane Smith',
    fax:'321-321-1236',
    phone:'314-321-3326',
    description:'Physical Therapist'
  },
  {
    imgUrl:'https://raw.githubusercontent.com/Infernus101/ProfileUI/0690f5e61a9f7af02c30342d4d6414a630de47fc/icon.png',
    email:'test@example.com',
    address:'124 mockingbird lane',
    name:'Buck Rogers',
    fax:'321-321-1236',
    phone:'314-321-3326',
    description:'Case Manager'
  }
  ])
}
//getContacts can be invoked at /api/contacts
async function getContacts(req,res) {
  res.json([
    {name:'Gordon Blair',numbers:['324-441-2321'],imgUrl:'https://raw.githubusercontent.com/Infernus101/ProfileUI/0690f5e61a9f7af02c30342d4d6414a630de47fc/icon.png',address:'8583 mockingbird lane'},
    {name:'Devin Carson',numbers:['324-453-2322'],imgUrl:'https://raw.githubusercontent.com/Infernus101/ProfileUI/0690f5e61a9f7af02c30342d4d6414a630de47fc/icon.png',address:'76567 mockingbird lane'},
    {name:'Alejandro Ramirez',numbers:['324-441-4324'],imgUrl:'https://raw.githubusercontent.com/Infernus101/ProfileUI/0690f5e61a9f7af02c30342d4d6414a630de47fc/icon.png',address:'543 mockingbird lane'},
    {name:'Sean Walsh',numbers:['324-441-6545'],imgUrl:'https://raw.githubusercontent.com/Infernus101/ProfileUI/0690f5e61a9f7af02c30342d4d6414a630de47fc/icon.png',address:'765 mockingbird lane'}
  ])
}

//getUser can be invoked at /api/user
async function getUser(req,res) {
  res.json(
    {name:'Simon',imgUrl:'https://raw.githubusercontent.com/Infernus101/ProfileUI/0690f5e61a9f7af02c30342d4d6414a630de47fc/icon.png'})
}

//addCalEvent can be invoked at /api/addCalEvent
async function addCalEvent(req,res) {
   res.status(201).end();
}
//addDoc can be invoked at /api/addDoc
async function addDoc(req,res) {
  res.status(201).end();
}
//addForm can be invoked at /api/addForm
async function addForm(req,res) {
  try {
  if(req.user) {
      const sqliteDb=await downloadFromDrive(req.user.sqlite_file_id,req.user.token)
      //todo: check the form type being sent in and validate the info with the schemas in /formSchemas using tv4
      const inserted=sqliteDb.exec(`INSERT INTO form (form_template_id,data) VALUES (${req.body.formTemplateId || 7},'${JSON.stringify(req.body.data)}'); SELECT last_insert_rowid();`)
      console.log('inserted is ',inserted[0].values[0][0])
      const uploadResponse= await uploadToDrive(
          crypto.encrypt(new Buffer(sqliteDb.export())),
          'db.encrypted',//todo save this as auto-incrementing name so users know which is the latest (computer already knows from file id)
          req.user.pathbinder_folder_id,
          req.user.token);
          //update the user with the newly saved sqlite db
      await query({text:`UPDATE ${process.env.DBSCHEMA}.user SET sqlite_file_id=$1`,values:[uploadResponse.data.id]})
      console.log('uploaded id is ',uploadResponse.data.id)
      const result=sqliteDb.exec(`SELECT * FROM form where id=${inserted[0].values[0][0]}`)
      console.log('sqlite select is ',result)
      const rows=convert(result)
      const ready=switchKeys({id:'id',form_template_id:'formTemplateId',data:'data'},rows)
      res.status(201).json(rows[0])
    }  else {
  //      res.send('you are NOT logged in')
        res.status(201).json({
            title:'title1',category:'category 1',data:{foo:'bar',baz:'buzz'},createdOn:new Date(),updatedOn:new Date(),templateId:1
          })
    }
    }catch(e) { console.log(e); res.json(e)}
}

module.exports = {
  getDocs,
  getPrintableDocs,
  getForms,
  getForm,
  getEvents,
  getTeam,
  getContacts,
  getUser,
  addCalEvent,
  addDoc,
  addForm
}