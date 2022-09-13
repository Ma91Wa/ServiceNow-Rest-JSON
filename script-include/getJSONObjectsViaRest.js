function getJSONObjectsViaRest(endpoint, objects, api, request, outer_keyname) {
    var pagedR = new sn_ws.RESTMessageV2(api, request);
    if (endpoint !== null) {
        pagedR.setEndpoint(endpoint);
    }
    var pagedResponse = pagedR.execute();
    var pagedResponseBody = pagedResponse.getBody();
    var pagedhttpStatus = pagedResponse.getStatusCode();
    var pagedObj = JSON.parse(pagedResponseBody);
    objects = objects.concat(pagedObj[outer_keyname]);
    if (pagedObj["@odata.nextLink"]) {
        objects = getJSONObjectsViaRest(pagedObj["@odata.nextLink"], objects, api, request, outer_keyname);
    }
    return objects;
}
