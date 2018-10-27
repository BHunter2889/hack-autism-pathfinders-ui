require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser=require('body-parser')
const compression = require('compression')
const {pool,query}=require('./query')
// const driveCaller=require('./driveCaller')
const fs=require('fs')
const path    = require("path");
const session=require('express-session')
const pgSession = require('connect-pg-simple')(session)

//just in case
process.on('unhandledRejection', function(e) {
    console.log(e.message, e.stack)
  })
  app.set('json spaces', 2);
  
  app.use(require('cookie-parser')());
  app.use(bodyParser.urlencoded({ //for form submissions
    extended:true
  }));
  app.use(bodyParser.json()) //for json bodies
  app.use(compression()) //to make sure things get gzipped before they're sent out
  app.use(session({ 
      store: new pgSession({pool,ttl:60*10}),
      secret: process.env.SESSION_SECRET, 
      resave: true, 
      saveUninitialized: true }));

const passport=require('./passportStuff')(query)
app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/google',(req, res, next) => {
    //save the user's original url so we can retry the permission check after login
    if (req.query.return) {
      req.session.oauth2return = req.query.return;
    }
    next();
  },
  passport.authenticate('google', { scope: ['email', 'profile','https://www.googleapis.com/auth/drive.metadata.readonly'] }))

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  // Redirect back to the original page, if any
  (req, res) => {
    const redirect = req.session.oauth2return || '/';
    delete req.session.oauth2return;
    res.redirect(redirect);
  })

  app.use('/',express.static('build'))
  app.use('/public',express.static('public'))

  let server = app.listen(process.env.PORT || 3000, function () {
    console.log('App listening on port '+(process.env.PORT || 3000))
  })