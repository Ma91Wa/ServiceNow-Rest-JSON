# ServiceNow-Rest-JSON
Load JSON data from REST-APIs into ServiceNow tables.


## Create 4 Script Includes
1. Go to Script Includes (https://instance.service-now.com/nav_to.do?uri=%2Fsys_script_include_list.do)
2. Create 4 new script includes (you can find them in script-include folder):
    1. getJSONObjectsViaRest
    2. insertGlideRecord
    3. loadRestInTable
    4. parseJSONObject

## Create Scheduled Job

Create a new scheduled job (https://instance.service-now.com/nav_to.do?uri=%2Fsysauto_list.do)

`loadRestInTable('REST MESSAGE NAME', 'HTTP-Method','target-table');`

Where "REST MESSAGE NAME" is what you defined in https://instance.service-now.com/nav_to.do?uri=%2Fsys_rest_message_list.do

The "HTTP-Method" you define in your Rest Message

and the "target-table" where you like to store your data.

# More information
https://medium.com/@max_30877/servicenow-load-json-response-from-rest-api-into-tables-eb8f6e10847f