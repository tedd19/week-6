$(document).ready(function() {
	$('#button').click(function() {
		$('.h1, .h2').fadeToggle('fast')
	})
	$('#button2').click(function() {
		$('.h3').slideUp('slow')
		$('.ptag').slideDown()
	})
	$('#button3').dblclick(function() {
	$('.h4').toggle()
	})

$("#animatebtn").click(function() {
	$('#divBox').animate({
		left: '300px',
		width: '500px',
		height: '400px'
	})
})	

	$("#appendbtn").click(function() {
		$("#list").append("<li>four</li>")
		$("#list").toggleClass('clicked')
	})
	$("#divSnow").websnowjq();
})