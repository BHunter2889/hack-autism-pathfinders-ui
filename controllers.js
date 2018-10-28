const fs=require('fs')
//getDocs
async function getDocs(req,res) {
  res.json([
    {id:1234,title:"title1",category:"cat1",path:"http://www.example.com"},
    {id:1234,title:"title2",category:"cat2",path:"http://www.example.com"},
    {id:1234,title:"title3",category:"cat1",path:"http://www.example.com"},
    {id:1234,title:"title4",category:"cat3",path:"http://www.example.com"}
  ])
}
//getPrintableDocs
async function getPrintableDocs(req,res) {
  res.contentType('application/pdf')
  res.end(fs.readFileSync('./test.pdf'),'binary')
}
//getForms
async function getForms(req,res) {
  res.json([
    {id:1234,title:"title4",category:"cat3"},
    {id:1234,title:"title3",category:"cat3"},
    {id:1234,title:"title2",category:"cat2"},
    {id:1234,title:"title1",category:"cat1"}
  ])
}
//getForm
async function getForm(req,res) {
  res.json({
    title:'title1',category:'category 1',data:{foo:'bar',baz:'buzz'},createdOn:new Date(),updatedOn:new Date(),templateId:1
  })
}
//getEvents
async function getEvents(req,res) {
  res.json(JSON.parse(fs.readFileSync('./calendarResponse.json','utf8')))
}
//getTeam
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
//getContacts
async function getContacts(req,res) {
  res.json([
    {name:'Gordon Blair',numbers:['324-441-2321'],imgUrl:'https://raw.githubusercontent.com/Infernus101/ProfileUI/0690f5e61a9f7af02c30342d4d6414a630de47fc/icon.png',address:'8583 mockingbird lane'},
    {name:'Devin Carson',numbers:['324-453-2322'],imgUrl:'https://raw.githubusercontent.com/Infernus101/ProfileUI/0690f5e61a9f7af02c30342d4d6414a630de47fc/icon.png',address:'76567 mockingbird lane'},
    {name:'Alejandro Ramirez',numbers:['324-441-4324'],imgUrl:'https://raw.githubusercontent.com/Infernus101/ProfileUI/0690f5e61a9f7af02c30342d4d6414a630de47fc/icon.png',address:'543 mockingbird lane'},
    {name:'Sean Walsh',numbers:['324-441-6545'],imgUrl:'https://raw.githubusercontent.com/Infernus101/ProfileUI/0690f5e61a9f7af02c30342d4d6414a630de47fc/icon.png',address:'765 mockingbird lane'}
  ])
}

//getUser
async function getUser(req,res) {
  res.json(
    {name:'Simon',imgUrl:'https://raw.githubusercontent.com/Infernus101/ProfileUI/0690f5e61a9f7af02c30342d4d6414a630de47fc/icon.png'})
}

//addCalEvent
async function addCalEvent(req,res) {
   res.status(201).end();
}
//addDoc
async function addDoc(req,res) {
  res.status(201).end();
}
//addForm
async function addForm(req,res) {
  res.status(201).end();
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