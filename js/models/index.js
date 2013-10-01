CV.IndexModel = Em.Object.extend({});

CV.IndexModel.reopenClass({
	createCVData : function(source) {
		var obj = {};
		source.models.forEach(function(item,index){
			if ( typeof source[item] !== 'undefined' ) {
				obj[item] = CV[item.substr(0,1).toUpperCase() + item.substr(1) + 'Model'].create(source[item]);
			} else if ( typeof source[item+'s'] !== 'undefined' ) {
				//array
				var arr = new Em.A();
				source[item+'s'].forEach(function(it,i){
					arr.pushObject(CV[item.substr(0,1).toUpperCase() + item.substr(1) + 'Model'].create(it));
				});
				obj[item+'s'] = arr;
			}
		});
		return CV.IndexModel.create(obj);
	}
});