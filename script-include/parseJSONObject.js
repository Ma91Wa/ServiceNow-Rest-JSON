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
                    for (var inner_key in object[key]) {
                        actualField = ('u_' + field + "_" + inner_key).toLowerCase();
                        value = object[key][inner_key];
                        insertGlideRecord(JSONImport, actualField, value);
                    }
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
