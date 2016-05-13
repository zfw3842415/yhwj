 $(document).ready(function(){	
 $('.offcanvas').click(function () {
 	console.log($('.row'));
    $('.row').toggleClass('active');
    $('.sidebar-offcanvas').toggleClass('sidebar-acitve-offcanvas')
  });

$('.data-toggle').dropdownHover();
$(".carousel").carousel('cycle')
})