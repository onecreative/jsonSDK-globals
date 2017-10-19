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
		if ([undefined,''].indexOf(req.query.id) === -1) {
			jsonGlobals._appID = req.query.id;
			jsonGlobals.builderPrefix = origin.replace(/-[0-9]*-apps.worldsecuresystems.com/,'');
			jsonGlobals.builderPath = referer.match(/\/_system\/apps\/.*?\//).replace(/http(s??):\/\//,'');
			if (jsonGlobals.builderPath !== null) jsonGlobals.builderPath = jsonGlobals.builderPath[0];
			jsonGlobals.utilitiesPath = jsonGlobals.builderPath+'public/utilities/';
			jsonGlobals.appPath = jsonGlobals.builderPath+'public/apps/'+req.query.id+'/';
			jsonGlobals.jsonPath = jsonGlobals.builderPath+'public/apps/'+req.query.id+'/json/';
			jsonGlobals.uploadPath = jsonGlobals.builderPath+'public/apps/'+req.query.id+'/uploads/';
			jsonGlobals.tempPath = jsonGlobals.builderPath+'public/apps/'+req.query.id+'/json/temp/';
			jsonGlobals.destinationPrefix = 'APP_'+req.query.id+'_';
			jsonGlobals.tempName = 'APP_'+req.query.id+'_temp';
			res.send(jsonGlobals);
		}else {
			var errors = {};
			if ([undefined,''].indexOf(req.query.id) > -1) errors.id = 'Your appID was not included in your request.';
			res.send(JSON.stringify(errors));
		}
	}
};