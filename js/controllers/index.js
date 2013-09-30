
CV.IndexRoute = Em.Route.extend({
	model : function() {
		return CV.IndexModel.createCVData(CV.dataSource);
	}
});