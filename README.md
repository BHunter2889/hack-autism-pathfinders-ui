Heroku Dashboard: https://dashboard.heroku.com/apps/hack-autism-pathfinders-app
Heroku App: https://hack-autism-pathfinders-app.herokuapp.com/

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#Running the App For The First Time
First you need a .env file that looks something like this:
```
SESSION_SECRET='replace this with a very secure secret, maybe a hash or something'

GOOGLE_CLIENT_ID='you need to get this from your google API console'
GOOGLE_CLIENT_SECRET='this too'
DBSCHEMA=public

HOST='set this to whatever host address you have for whatever environment you are on'


DATABASE_URL=postgres://username:password@db-host-url.com:5432/databaseName
```
DON'T COMMIT THE .env FILE. IT IS FOR LOCAL DEV ONLY. WHATEVER YOU DEPLOY IT TO SHOULD HAVE ITS OWN MORE SECURE WAY OF SETTING ENVIRONMENT VARIABLES.

see the dotenv npm package for more information on the .env file

For the google API client credentials mentioned in this file, see https://developers.google.com/identity/protocols/OpenIDConnect
Be sure to enable the following APIs in the API dashboard of your google cloud console:
 - Google Drive API
 - Google Contacts API
 - Google Calendar API
 - Google Plus API
Be sure to also attach a billing account to your gcp project: https://cloud.google.com/billing/docs/how-to/manage-billing-account

Also, in order to use these APIs, you can't be calling them from your local computer (i.e. Google requires the call to originate from a public domain). I suggest you use ngrok for local development.

Whatever domain you do use, you'll need to add it to the Authorized Domains list when configuring the OAuth Consent Screen, and to the authorized Javascript origins and authorized Redirect URIS for the API client credentials creation workflow described in the above link.

Your authorized javascript origins are currently configured to be `yourdomain.com/auth/google`

Your authorized javascript redirects are currently configured to be `yourdomain.com/auth/google/callback`

You can change the origin and redirect paths in server.js.

This app has a central database to keep track of sessions and users. To set up the tables for that database you need to run `ddl.sql`

Then run `npm install; npm run build; npm run start` and it should run

#Things to do

See the github issues associated with this project here: https://github.com/BHunter2889/hack-autism-pathfinders-ui/issues

Here is what we consider their order of importance: