CV.SectionModel = Em.Object.extend({
	init : function() {
		var img = new Image();
		img.src = this.get('img');
	},
	em_view : function(){
		var v = this.get("view");
		return Em.getPath("CV."+ v.substr(0,1).toUpperCase()+v.substr(1) + 'View');
	}.property("view"),
	href : function() {
		return '#' + this.get('id');
	}.property("id")
});