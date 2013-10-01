
CV.IndexRoute = Em.Route.extend({
	model : function() {
		return CV.IndexModel.createCVData(CV.dataSource);
	}
});

CV.PersonView = Em.View.extend({
	templateName : 'person'
});

CV.SkillsView = Em.View.extend({
	templateName : 'skills'
});

CV.EmployersView = Em.View.extend({
	templateName : 'employers'
});

CV.EducationView = Em.View.extend({
	templateName : 'education'
});

CV.ProjectsView = Em.View.extend({
	templateName : 'projects'
});