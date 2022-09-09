function parseJSONObject(object, target_table) {
    var JSONImport = new GlideRecord(target_table);
    JSONImport.initialize();
    for (var key in object) {
        if (object.hasOwnProperty(key)) {
            var field = key.toLowerCase();
            var actualField = "";
            var value = "";
            if (typeof(object[key]) === "object") {
                if (!Array.isArray(object[key])) {
					gs.info("DEBUG: JSON is no array");
                    for (var inner_key in object[key]) {
                        actualField = ('u_' + field + "_" + inner_key).toLowerCase();
                        value = object[key][inner_key];
                        insertGlideRecord(JSONImport, actualField, value);
                    }
                } else {
					actualField = 'u_' + field;
					var array_length =  object[key].length;
					for (var i = 0; i < array_length; i++) {
						value = value + object[key][i].toString() + ",";
					}
					value = value.slice(0,-1);				
				}
            } else {
                value = object[key].toString();
                actualField = 'u_' + field;
            }
            insertGlideRecord(JSONImport, actualField, value);
        }
    }
    JSONImport.insert();
}

