exports.reindexAll = function(data) {
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
	return reindexAll(data);
};