CV.PersonModel = Em.Object.extend({
	full_name : function() {
		return this.get("name") + ' ' + this.get('surname');
	}.property("name",'surname')
});