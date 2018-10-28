require('dotenv').config()
const passport=require('passport')
const GoogleStrategy=require('passport-google-oauth20').Strategy
const buildInitialFolder=require('./buildInitialFolder')

function getPassport(queryFunc) {
  passport.use(new GoogleStrategy({
    clientID:process.env.GOOGLE_CLIENT_ID,
    clientSecret:process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.HOST+'/auth/google/callback'
  },(accessToken,refreshToken,profile,cb)=>{

  // todo store the following in the db
  // profile.photos[0].value
  // profile.familyName
  // profile.givenName

    //The verify callback must call cb providing a user to complete authentication.
		const email=profile.emails.find(e=>e.type=='account').value
	if(email !== undefined) {

		queryFunc({
			text:`SELECT * FROM ${process.env.DBSCHEMA}.user WHERE google_id=$1`,
			values:[profile.id]
			})
		  .then((result)=>{
			// console.log('search result: ',result)
			if(result.rowCount) {
				queryFunc({
					text:`UPDATE ${process.env.DBSCHEMA}.user SET token=$1, refreshToken=$2`,
					values:[accessToken,refreshToken]
				}).then(()=>{
					cb(undefined,Object.assign(result.rows[0],{token:accessToken,refreshToken}))
				})
			} else {
			  buildInitialFolder(accessToken).then((result)=>{
			    return queryFunc({
                 					text:`INSERT INTO ${process.env.DBSCHEMA}.user (id,email,name,google_id,token,refreshToken,image_url,pathbinder_folder_id,documents_folder_id,sqlite_file_id) VALUES (nextval('${process.env.DBSCHEMA}.user_id_seq'),$1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING id`,
                 					values:[
                 					email,
                 					profile.givenName,
                 					profile.id,
                 					accessToken,
                 					refreshToken,
                 					((profile.photos && profile.photos[0]) ? profile.photos[0].value : null),
                 					result.pathBinderFolder,
                 					result.documentSubfolder,
                 					result.sqlite
                 					]
                 				})
			  })

				.then((result)=>{
				  cb(undefined,result.rows[0])
				}).catch(e=>{console.log(e); cb(e);})
			}
		  }).catch(e=>{console.log(e); cb(e);})
	} else {
		cb('you must have an email to log into this service')
	}
  }))

  // Configure Passport authenticated session persistence.
  //
  // In order to restore authentication state across HTTP requests, Passport needs
  // to serialize users into and deserialize users out of the session.  In a
  // production-quality application, this would typically be as simple as
  // supplying the user ID when serializing, and querying the user record by ID
  // from the database when deserializing.
  passport.serializeUser(function(user, cb) {
    cb(null, user.id);
  });

  passport.deserializeUser(function(obj, cb) {
		//todo if user's auth token is expired, refresh it
    queryFunc({
			text:`SELECT * FROM ${process.env.DBSCHEMA}.user WHERE id=$1`,
			values:[obj]
		})
      .then((result)=>{
        if(result.rowCount) {
          cb(undefined,result.rows[0])
        } else {
          cb('Error: Could not find user info. Please log in again.')
        }
      })
  });

  return passport
}


module.exports=getPassport