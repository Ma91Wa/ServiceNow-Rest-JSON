function checkRelatedEntry(table, relation){
	try{
		var gr = new GlideRecord(table);
		gr.addQuery(relation, current.sys_id);
		gr.query();
		var count = gr.getRowCount();
		gs.info('DEBUG COUNT: ' + count);
			if(count == 0)
				return false;
			else 
				return true;
		} catch (e) {
			gs.error('ERROR: checkRelatedEntry - wrong table or relation!');
			return false;
		}
}
