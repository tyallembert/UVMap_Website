
class Tour {
	constructor(activePage) {
		this.pages = {
			1: {
				"title": "Signup",
				"description": "The signup page is where it all begins. Requiring a uvm.edu email address, we provide backend protection to ensure that only students from the University of Vermont are able to use the features UVMaps provides. With a simple username and password, you can make the UVM journey of your dreams come true!",
				"image": "images/tourVideos/tour_signup.mp4"
			},
			2: {
				"title": "Login",
				"description": "While the login page not be the most exciting at a first glance, it is working hard behind the scenes. Requiring a username and password, the login page works with our backend to keep your account credentials secure and efficiently accessible. You will be on your journey before you can even say, \"Wow UVMaps! You are simply amazing! I should email the developers and let them know how awesome they are!\"",
				"image": "images/tourVideos/tour_login.mp4"
			},
			3: {
				"title": "Map",
				"description": "Now that you are safe and sound, logged in to the app, you reach the map page. The map page is where it all goes down - choosing your destination, looking at the possible stops along the way, and more. If you fancy a bike ride, UVMaps got you covered! We provide routes for both walking and biking methods of travel. While you are on your journey, we also provide you an ETA to help with your daily time management as much as we can. You gotta study, and we will get you there.",
				"image": "images/tourVideos/tour_map.mp4"
			},
			4: {
				"title": "Schedule",
				"description": "We know as students you have a lot on your plate. While we've got you covered for travel assistance, we wanted to do more. Our schedule page includes advanced UI that provides a weekly presentation of the classes you have to alleviate your stressful daily schedules. As well as showing your schedule, there is also the snazzy function of adding classes. Pulling directly from UVM's class lists, you will be able to search through our database and select the classes you are taking. The 'when and where' is what UVMaps was designed for.",
				"image": "images/tourVideos/tour_schedule.mp4"
			},
			5: {
				"title": "Settings",
				"description": "The settings page allows users to tweak UVMaps app exactly to their liking. Prefer apps in dark mode? You got it. Want an altered ETA? Sure thing. Here is where you can unlock the full potential to UVM travel. You will never lose to your classmates when racing to class. Thanks, UVMaps!",
				"image": "images/tourVideos/tour_settings.mp4"
			}
		}
		this.activePage = activePage;
		this.UITitle = $("#tourTitle");
		this.UIDescription = $("#tourDescription");
		this.UIImage = $("#tourImage");
		this.UIImageContainer = $(".tourImageContainer");
		this.videoElement = document.getElementById('tourVideo');
		this.videoElement.playbackRate = 1.5;
		this.videoElement.pause();
		this.updateUI();
	}
	hideLanding(){
		$(".landingPage").animate({opacity: '0'}, "200ms").promise().done(()=>{
			$(".landingPage").css("display", "none");
		});
	}
	autoTour(){
		setInterval(()=>{
            this.nextPage();
        },30000);
	}
	nextPage(){
		if(this.activePage == 5){
			this.activePage = 1
		}else{
			this.activePage = this.activePage + 1
		}
		this.updateActiveNav();
		this.updateUI();
	}
	backPage(){
		if(this.activePage == 1){
			this.activePage = 5
		}else{
			this.activePage = this.activePage - 1
		}
		this.updateActiveNav();
		this.updateUI();
	}
	setActivePage(num){
		this.activePage = num;
		this.updateActiveNav();
		this.updateUI();
	}
	updateActiveNav(){
		$(".tourNav").each((i,element) => {
			var elements = element.id.split("_");
			var pageTitle = this.pages[this.activePage]["title"].split(" ");
			if(pageTitle[0].trim().toLowerCase() == elements[1].trim().toLowerCase()){
				$(element).addClass("activeTourNav");
			}else{
				$(element).removeClass("activeTourNav");
			}
		});
	}
	updateUI(){
		this.UIImageContainer.animate({"margin-left": '+=200', 'opacity': 'toggle'}, 300).promise().done(()=>{
			this.videoElement.pause();
			this.videoElement.load();
			this.UIImage.attr("src",this.pages[this.activePage]["image"]);
			this.UIImageContainer.animate({"margin-left": '-=200', 'opacity': 'toggle'}, 800);
			this.videoElement.play();
			this.videoElement.playbackRate = 1.5;
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

//mkaing tour element
// var js = document.createElement("script");
// js.type = "text/javascript";
// js.appendChild("let tour = Tour(1);");
// console.log(js);
// document.body.appendChild(js);