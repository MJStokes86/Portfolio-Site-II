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
	

	$("#owl-demo").owlCarousel({
 
      autoPlay: 5000, 
 
      items : 1,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
      responsive: true
     
 
  });

});