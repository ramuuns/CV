CV = Em.Application.create({});

CV.Router.reopen({
  location: 'history'
});

$(function(){
	$(document.body).scrollspy({target:'#side-nav'});
});
