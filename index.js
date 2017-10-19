var jsonGlobals = require('./globals');

exports.jsonGlobals = function (req,res) {
	var origin = req.get('Origin') || '';
	var referer = req.get('Referer') || '';
	//set JSON content type and CORS headers for the response
	res.header('Content-Type','application/json');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	res.header('Access-Control-Allow-Origin', origin);

	//respond to CORS preflight requests
	if (req.method === 'OPTIONS') {
		res.header('Access-Control-Allow-Methods', '');
		res.status(204).send('');
	}else {
		//continue on
		if ([undefined,''].indexOf(req.body.appID) === -1) {
			jsonGlobals._appID = req.body.appID;
			jsonGlobals.builderPrefix = origin.replace(/-[0-9]*-apps.worldsecuresystems.com/,'');
			jsonGlobals.builderPath = referer.match(/\/_system\/apps\/.*?\//)[0];
			if (jsonGlobals.builderPath !== null) jsonGlobals.builderPath = jsonGlobals.builderPath[0];
			jsonGlobals.utilitiesPath = jsonGlobals.builderPath+'public/utilities/',
			jsonGlobals.appPath = jsonGlobals.builderPath+'public/apps/'+req.body.appID+'/',
			jsonGlobals.jsonPath = jsonGlobals.builderPath+'public/apps/'+req.body.appID+'/json/',
			jsonGlobals.uploadPath = jsonGlobals.builderPath+'public/apps/'+req.body.appID+'/uploads/',
			jsonGlobals.tempPath = jsonGlobals.builderPath+'public/apps/'+req.body.appID+'/json/temp/',
			jsonGlobals.destinationPrefix = 'APP_'+req.body.appID+'_',
			jsonGlobals.tempName = 'APP_'+req.body.appID+'_temp'
			res.send(jsonGlobals);
		}else {
			var errors = {};
			if ([undefined,''].indexOf(req.body.appID) > -1) errors.appID = 'Your appID was not included in your request.';
			res.send(JSON.stringify(errors));
		}
	}
};