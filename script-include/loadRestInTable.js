function loadRestInTable(rest_message, http_method, target_table, outer_keyname) {
    try {
        var objects = getJSONObjectsViaRest(null, [], rest_message, http_method, outer_keyname);

        for (var i=0;  i<objects.length; i++ ) {
            parseJSONObject(objects[i], target_table);
        }
    } catch (ex) {
        var message = ex.message;
        gs.info('JSON IMPORT ERROR: ' + rest_message + ' (' + http_method + '): ' + message);
    }
}
