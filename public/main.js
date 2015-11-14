$(document).ready(function(){

	
	$('#resume-button').click(function(){
		window.location.href = ('Michael_J_Stokes_Resume.pdf')
	});

	$('#project-link-1').click(function(){
		window.location.href = ('https://namethattube.herokuapp.com/')
	})

	$('#source-code-1').click(function(){
		window.location.href = ('https://github.com/MJStokes86/Name-That-Tube')
	})

	$('#project-link-2').click(function(){
		window.location.href = ('https://stokesblog.herokuapp.com/')
	})

	$('#source-code-2').click(function(){
		window.location.href = ('https://github.com/MJStokes86/Rails-Blog')
	})

	$('#project-link-3').click(function(){
		window.location.href = ('http://stokes-todo-app.herokuapp.com/')
	})

	$('#source-code-3').click(function(){
		window.location.href = ('https://github.com/MJStokes86/ToDo-App')
	})

	// $('#project-link-4').click(function(){
	// 	window.location.href = ('http://stokes-todo-app.herokuapp.com/')
	// })

	$('#source-code-4').click(function(){
		window.location.href = ('https://github.com/WDI-Bulbasaur/Traveling_Football_Fan')
	})

	// $('#project-link-5').click(function(){
	// 	window.location.href = ('')
	// })

	// $('#source-code-5').click(function(){
	// 	window.location.href = ('')
	// })

	// $('#project-link-6').click(function(){
	// 	window.location.href = ('')
	// })

	$('#source-code-6').click(function(){
		window.location.href = ('https://github.com/MJStokes86/Movie-Review-App')
	})

	// $('#project-link-7').click(function(){
	// 	window.location.href = ('')
	// })

	// $('#source-code-7').click(function(){
	// 	window.location.href = ('')
	// })

	$('#project-link-8').click(function(){
		window.location.href = ('http://mjstokes86.herokuapp.com/')
	})

	$('#source-code-8').click(function(){
		window.location.href = ('https://github.com/MJStokes86/Portfolio-Site')
	})

	// $('#project-link-9').click(function(){
	// 	window.location.href = ('')
	// })

	$('#source-code-9').click(function(){
		window.location.href = ('https://github.com/MJStokes86/Portfolio-Site-II')
	})



	

		$('.nav-toggle').on('click', function(){
		$('.main-navigation').toggleClass('open');

		});

		

	

	 $('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
        .animate({scrollTop: targetOffset}, 1000);
       return false;
      }
    }
  });

	

	

	$("#owl-demo").owlCarousel({
 
      autoPlay: 5000, 
 
      items : 1,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
      responsive: true
     
 
  });

});