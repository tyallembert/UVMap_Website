class Tour {
	constructor(activePage) {
		this.pages = {
			1: {
				"title": "Signup Page",
				"description": "The signup page is where it all begins. Requiring a uvm.edu email address, we provide backend protection to ensure that only students from the University of Vermont are able to use the features UVMaps provides. With a simple username and password, you can make the UVM journey of your dreams come true!",
				"image": "images/signup.png"
			},
			2: {
				"title": "Login Page",
				"description": "While the login page not be the most exciting at a first glance, it is working hard behind the scenes. Requiring a username and password, the login page works with our backend to keep your account credentials secure and efficiently accessible. You will be on your journey before you can even say, \"Wow UVMaps! You are simply amazing! I should email the developers and let them know how awesome they are!\"",
				"image": "images/login.gif"
			},
			3: {
				"title": "Map Page",
				"description": "Now that you are safe and sound, logged in to the app, you reach the map page. The map page is where it all goes down - choosing your destination, looking at the possible stops along the way, and more. If you fancy a bike ride, UVMaps got you covered! We provide routes for both walking and biking methods of travel. While you are on your journey, we also provide you an ETA to help with your daily time management as much as we can. You gotta study, and we will get you there.",
				"image": "images/map.gif"
			},
			4: {
				"title": "Schedule Page",
				"description": "We know as students you have a lot on your plate. While we've got you covered for travel assistance, we wanted to do more. Our schedule page includes advanced UI that provides a weekly presentation of the classes you have to alleviate your stressful daily schedules. As well as showing your schedule, there is also the snazzy function of adding classes. Pulling directly from UVM's class lists, you will be able to search through our database and select the classes you are taking. The 'when and where' is what UVMaps was designed for.",
				"image": "images/schedule.gif"
			},
			5: {
				"title": "Settings Page",
				"description": "The settings page allows users to tweak UVMaps app exactly to their liking. Prefer apps in dark mode? You got it. Want an altered ETA? Sure thing. Here is where you can unlock the full potential to UVM travel. You will never lose to your classmates when racing to class. Thanks, UVMaps!",
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