function reindex(data) {
	if (typeof data === 'undefined') data = {};
	data = {
		collection: data.collection,
		item: undefined // used internally
	};
	if (typeof data.collection === 'object' && typeof data.collection.items !== 'undefined') {
		data.collection.indexBy = {};
		data.collection.idBy = {};
		for (var i = 0; i < data.collection.items.length; i++) {
			data.item = data.collection.items[i];
			for (var key in data.item) {
				if (['_parent','_type'].indexOf(key) === -1) {
					data.value = data.item[key];
					if (['undefined','object'].indexOf(typeof data.value) === -1 || Array.isArray(data.value)) {
						if (typeof data.collection.indexBy[key] === 'undefined') data.collection.indexBy[key] = {};
						if (key !== 'id' && typeof data.collection.idBy[key] === 'undefined') data.collection.idBy[key] = {};
						if (Array.isArray(data.value)) for (var e = 0; e < data.value.length; e++) assignIndexes(data.collection,data.item,key,data.value[e],i);
						else assignIndexes(data.collection,data.item,key,data.value,i);
					}
				}
			}
		}
	}
	return data.collection;
}
function assignIndexes(collection,item,key,value,index) {
	if (typeof collection.indexBy[key][value.toString()] === 'undefined') collection.indexBy[key][value.toString()] = [];
	if (key !== 'id' && typeof collection.idBy[key][value.toString()] === 'undefined') collection.idBy[key][value.toString()] = [];
	collection.indexBy[key][value.toString()].push(index);
	if (key !== 'id') collection.idBy[key][value.toString()].push(item.id.toString());
}
function reindexAll(data) {
	if (typeof data === 'undefined') data = {};
	data = {
		collection: data.collection
	};
	if (typeof data.collection === 'object' && data.collection !== null && !Array.isArray(data.collection)) {
		for (var prop in data.collection) {
			if (prop !== 'items' && typeof data.collection[prop] === 'object' && typeof data.collection[prop].items !== 'undefined') reindex({collection:data.collection[prop]});
			reindexAll({collection:data.collection[prop]});
		}
	}
	return data.collection;
}
var jsonGlobals = reindexAll({collection:require('./jsonGlobals')});
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