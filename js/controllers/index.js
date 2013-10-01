
CV.IndexController = Em.ObjectController.extend({
});

CV.IndexRoute = Em.Route.extend({
	model : function() {
		return CV.IndexModel.createCVData(CV.dataSource);
	}
});


CV.IndexView = Em.View.extend({
	'templateName' : 'index',
	didInsertElement : function() {
		$('#ze-image').css('background-image','url('+this.get('controller').get('sections')[0].img+')');
	}
});

CV.Scrolling = Em.Mixin.create({

	bindScrolling: function(opts) {
		var onScroll, self = this;
		opts = opts || {debounce: 100};
		if (opts.debounce) {
			onScroll = CV.debounce(function() { return self.scrolled(); }, 100);
		} else {
			onScroll = function(){
				return self.scrolled();
			};
		}

		$(document).bind('touchmove', onScroll);
		$(window).bind('scroll', onScroll);
	},

	unbindScrolling: function() {
		$(window).unbind('scroll');
		$(document).unbind('touchmove');
	}
});

CV.ScrollingView = Em.View.extend(CV.Scrolling,{
	section : null,
	didInsertElement: function() {
		this.bindScrolling();
	},
	willRemoveElement: function() {
		this.unbindScrolling();
	},
	scrolled: function() {
		var li = $('#side-nav a[href='+this.get('section').get('href')+']').parents('li');
		if ( li.hasClass('active') ) {
			$('#ze-image').css('background-image','url('+this.get('section').img+')');
		}
	}
});

CV.PersonView = CV.ScrollingView.extend({
	templateName : 'person'
});

CV.SkillsView = CV.ScrollingView.extend({
	templateName : 'skills'
});

CV.EmployersView = CV.ScrollingView.extend({
	templateName : 'employers'
});

CV.EducationView = CV.ScrollingView.extend({
	templateName : 'education'
});

CV.ProjectsView = CV.ScrollingView.extend({
	templateName : 'projects'
});