CV.IndexModel = Em.Object.extend({});

CV.IndexModel.reopenClass({
	createCVData : function(source) {
		var obj = {};
		source.models.forEach(function(item,index){
			obj[item] = CV.[item.substr(0,1).toUpperCase() + item.substr(1) + 'Model'].create(source[item]);
		});
		return CV.IndexModel.create(obj);
	}
});