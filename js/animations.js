(function() {
	var anim = $('.animations');
	
	anim.find('button').click(function () {
		$(this).addClass('active').siblings().removeClass('active');
		for ( var i=0;i< $('.anim').length;i++ ) {
			if ( $(this).hasClass('reset') ) {
				anim.find('.anim').eq(i).removeClass('in').addClass('out');
			} else {				
				anim.find('.anim').eq(i).removeClass('out').addClass('in');
			}
		}
	});
	
})();