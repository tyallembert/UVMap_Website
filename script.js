$("a[href^='#']").click(function(e) {
	e.preventDefault();
	
	var position = $($(this).attr("href")).offset().top;

	$("body, html").animate({
		scrollTop: position
	} /* speed */ );
});

function showNextPage(){
	let titles = ["Signup Page", "Login Page", "Map Page", "Schedule Page", "Settings Page"]
	let descriptions = [
		"Signup description",
		"Login description",
		"Map description",
		"Schedule description",
		"Settings description"
	]
	let images = [
		"signup-nobg.png",
		"login-nobg.png",
		"map-nobg.png",
		"schedule-nobg.png",
		"settings-nobg.png"
	]
	let currentID = $(".tourWrapper").attr("id");
	let newID = currentID + 1;
	if (newID > 4){
		newID = 0;
	}
	$("#tourTitle").html(titles[newID]);
	$("#tourDescription").html(descriptions[newID]);
	$("#tourImage").html(images[newID]);

	$(".tourWrapper").attr("id", newID);
}