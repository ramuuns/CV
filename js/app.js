if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement("style");
  msViewportStyle.appendChild(
    document.createTextNode(
      "@-ms-viewport{width:auto!important}"
    )
  );
  document.getElementsByTagName("head")[0].appendChild(msViewportStyle);
}

CV = Em.Application.create({});

CV.Router.reopen({
  location: 'history'
});

CV.debounce = function(func, wait) {
  var timeout = null;

  return function() {
    var context = this;
    var args = arguments;

    var later = function() {
      timeout = null;
      return func.apply(context, args);
    };

    if (timeout) return;

    var currentWait;
    if (typeof wait === "function") {
      currentWait = wait();
    } else {
      currentWait = wait;
    }

    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(later, currentWait);
    return timeout;
  };
};


$(function(){
	$(document.body).scrollspy({target:'#side-nav'});

	$(document.body).on('click','a',function(){
		var current_url = location.protocol + '//' + location.hostname + location.pathname;
		if ( this.href.substr(0,current_url.length) === current_url ) {
			var target = $('#' + this.href.split("#")[1]);
			$('html, body').stop().animate({
				scrollTop: target.offset().top
			}, 400);
			this.location.hash = '#' + target;

			return false;
		} else {
			this.target = '_blank';
		}
		return true;
	});
});
