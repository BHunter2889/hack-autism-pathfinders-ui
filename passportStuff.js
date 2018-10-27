require('dotenv').config()
const passport=require('passport')
const GoogleStrategy=require('passport-google-oauth20').Strategy

function getPassport(queryFunc) {
  passport.use(new GoogleStrategy({
    clientID:process.env.GOOGLE_CLIENT_ID,
    clientSecret:process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.HOST+'/auth/google/callback'
  },(accessToken,refreshToken,profile,cb)=>{
    //The verify callback must call cb providing a user to complete authentication.
		const email=profile.emails.find(email=>email.value.substring(email.value.length-13)=='@1904labs.com')
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
			  queryFunc({
					text:`INSERT INTO ${process.env.DBSCHEMA}.user (id,email,google_id,token,refreshToken) VALUES (nextval('${process.env.DBSCHEMA}.user_id_seq'),$1,$2,$3,$4) RETURNING id`,
					values:[email,profile.id,accessToken,refreshToken]
				})
				.then((result)=>{
				  cb(undefined,result.rows[0])
				}).catch(e=>{console.log(e); cb(e);})
			}
		  }).catch(e=>{console.log(e); cb(e);})
	} else {
		cb('you must log in with a 1904labs account to use this service')
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