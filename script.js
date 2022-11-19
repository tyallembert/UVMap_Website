class Tour {
	constructor(activePage) {
		this.pages = {
			1: {
				"title": "Signup Page",
				"description": "signup description",
				"image": "images/signup.png"
			},
			2: {
				"title": "Login Page",
				"description": "Login description",
				"image": "images/login.gif"
			},
			3: {
				"title": "Map Page",
				"description": "map description",
				"image": "images/map.gif"
			},
			4: {
				"title": "Schedule Page",
				"description": "Schedule description",
				"image": "images/schedule.gif"
			},
			5: {
				"title": "Settings Page",
				"description": "Settings description",
				"image": "images/settings.png"
			}
		}
		this.activePage = activePage;
		this.UITitle = $("#tourTitle");
		this.UIDescription = $("#tourDescription");
		this.UIImage = $("#tourImage");
		this.UIImageContainer = $(".tourImageContainer");
	}
	hideLanding(){
		$(".landingPage").animate({opacity: '0'}, "200ms").promise().done(()=>{
			$(".landingPage").css("display", "none");
		});
	}
	nextPage(){
		if(this.activePage == 5){
			this.activePage = 1
		}else{
			this.activePage = this.activePage + 1
		}
		this.updateUI();
	}
	updateUI(){
		this.UIImageContainer.animate({"margin-left": '+=200', 'opacity': 'toggle'}, 300).promise().done(()=>{
			this.UIImage.attr("src",this.pages[this.activePage]["image"]);
			this.UIImageContainer.animate({"margin-left": '-=200', 'opacity': 'toggle'}, 800);
		});
		this.UITitle.animate({"opacity": 'toggle'}, 500).promise().done(()=>{
			this.UITitle.html(this.pages[this.activePage]["title"]);
			this.UITitle.animate({"opacity": 'toggle'}, 500);
		});
		this.UIDescription.animate({"opacity": 'toggle'}, 500).promise().done(()=>{
			this.UIDescription.html(this.pages[this.activePage]["description"]);
			this.UIDescription.animate({"opacity": 'toggle'}, 500);
		});
	}
}
  

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