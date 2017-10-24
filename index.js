var reindexAll = require('./reindexAll').reindexAll;
var jsonGlobals = reindexAll({collection:require('./jsonGlobals')});
console.log(jsonGlobals);
exports.jsonGlobals = function (req,res) {
	var origin = req.get('Origin') || '';
	//set JSON content type and CORS headers for the response
	res.header('Content-Type','application/json');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	res.header('Access-Control-Allow-Origin', origin);

	//respond to CORS preflight requests
	if (req.method === 'OPTIONS') {
		res.header('Access-Control-Allow-Methods', 'GET');
		res.status(204).send('');
	}else {
		//continue on
		if ([undefined,''].indexOf(req.query.appid) === -1) {
			var builderPath = req.get('Referer') || '';
			builderPath = builderPath.match(/\/_system\/apps\/.*?\//)[0] || '';
			builderPath = builderPath.replace(/http(s??):\/\//,'');
			jsonGlobals._appID = req.query.appid;
			jsonGlobals.builderPrefix = origin.replace(/-[0-9]*-apps.worldsecuresystems.com/,'').replace(/http(s??):\/\//,'');
			jsonGlobals.builderPath = builderPath;
			jsonGlobals.utilitiesPath = jsonGlobals.builderPath+'public/utilities/';
			jsonGlobals.appPath = jsonGlobals.builderPath+'public/apps/'+req.query.appid+'/';
			jsonGlobals.jsonPath = jsonGlobals.builderPath+'public/apps/'+req.query.appid+'/json/';
			jsonGlobals.uploadPath = jsonGlobals.builderPath+'public/apps/'+req.query.appid+'/uploads/';
			jsonGlobals.tempPath = jsonGlobals.builderPath+'public/apps/'+req.query.appid+'/json/temp/';
			jsonGlobals.destinationPrefix = 'APP_'+req.query.appid+'_';
			jsonGlobals.tempName = 'APP_'+req.query.appid+'_temp';
			res.send(JSON.stringify(jsonGlobals));
		}else {
			var errors = {};
			if ([undefined,''].indexOf(req.query.appid) > -1) errors.id = 'Your appID was not included in your request.';
			res.send(JSON.stringify(errors));
		}
	}
};