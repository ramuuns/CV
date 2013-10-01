CV.PersonModel = Em.Object.extend({
	full_name : function() {
		return this.get("name") + ' ' + this.get('surname');
	}.property("name",'surname'),
	age : function() {
		var dateparts = this.get('date_of_birth').split("-");
		var then = new Date(dateparts[0],dateparts[1],dateparts[2]);
		var now = new Date();
		var yr_diff = now.getFullYear() - then.getFullYear();
		if ( now.getMonth() > then.getMonth() ) {
			return yr_diff;
		} else {
			if ( now.getMonth() < then.getMonth() ) {
				return yr_diff - 1;
			} else {
				if ( now.getDate() >= then.getDate() ) {
					return yr_diff;
				} else {
					return yr_diff - 1;
				}
			}
		}
	}.property("date_of_birth"),
	email_link : function() {
		return 'mailto:'+this.get('email');
	}.property("email"),
	twitter_link : function() {
		return 'https://twitter.com/' + this.get('twitter') + '/';
	}.property("twitter"),
	github_link : function() {
		return 'http://github.com/' + this.get('github') + '/';
	}.property('github'),
	stackoverflow_link : function() {
		return 'http://stackoverflow.com/user/'+this.get('stackoverflow');
	}.property('stackoverflow')
});