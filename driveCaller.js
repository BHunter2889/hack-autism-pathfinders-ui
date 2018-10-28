const https = require('https');
const util=require('util');

//https://www.googleapis.com/drive/v3/files?supportsTeamDrives=true&includeTeamDriveItems=true&q='0B8PCwAS3Kf3tOHFWMURMM2hycm8' in parents

function addQueryParams(params) {
	return Object.keys(params)
		.reduce((paramArr,paramName)=>paramArr.concat(`${paramName}=${encodeURIComponent(params[paramName])}`),[])
		.join('&')
}
function makeDriveCallRaw(folderId,token,isForFolders,cb) {
	const equalsOrNot = isForFolders ? '=' : '!='
	const options= {
		hostname:'www.googleapis.com',
		port:443,
		path:`/drive/v3/files?${addQueryParams({
			supportsTeamDrives:true,
			includeTeamDriveItems:true,
			q:`'${folderId}' in parents and mimeType${equalsOrNot}'application/vnd.google-apps.folder'`,
			fields:'files/id,files/name'
		})}`,
		method:'GET',
		headers:{
			'Authorization':`Bearer ${token}`
		}
	}
	const req = https.request(options, (res) => {
		let data=''
	  res.on('data', (d) => {
			// process.stdout.write(d);
			data+=d.toString()
	  });
		res.on('end',()=>{
			const dataObj=JSON.parse(data)
			if(dataObj.files) {
				cb(null,JSON.parse(data).files)
			} else {
				cb('error getting the folder descendant information for '+folderId+': '+dataObj.code+' '+dataObj.message)
			}
		})
	});
	req.on('error', (e) => {
		console.error(e);
		cb(e)
	});
	req.end();
}
const makeDriveCall=util.promisify(makeDriveCallRaw)

function getFolderNameRaw(folderId,token,cb) {
console.log('folderId: ',folderId)
	const options= {
		hostname:'www.googleapis.com',
		port:443,
		path:`/drive/v3/files/${folderId}`,
		method:'GET',
		headers:{
			'Authorization':`Bearer ${token}`
		}
	}
	const req = https.request(options, (res) => {
		let data=''
	  res.on('data', (d) => {
			// process.stdout.write(d);
			data+=d.toString()
	  });
		res.on('end',()=>{
			const dataObj=JSON.parse(data)
			if(dataObj.name) {
				cb(null,JSON.parse(data).name)
			} else {
				console.log(dataObj)
				cb('error getting the folder information for '+folderId+': '+dataObj.code+' '+dataObj.message)
			}
		})
	});
	req.on('error', (e) => {
		console.error(e);
		cb(e)
	});
	req.end();
}
const getFolderName=util.promisify(getFolderNameRaw)

async function getFolderContents(folderId,name,token) {
	const d=await makeDriveCall(folderId,token,true)
	return d
}

module.exports={
	getFolderName,
	getFolderContents
}