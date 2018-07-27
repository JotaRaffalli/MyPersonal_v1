		//Typed
		var type3 = new Typed('#typed3', {
			strings: [  "technology", "web development", "agile", "project management", "Angular",  "React", "Express", "Game of Thrones", "Pepperoni Pizza" ],
			loop: true,
  			loopCount: 3,
			startDelay: 2500,
			backSpeed: 40,
			backDelay: 1000,
  			typeSpeed: 100
		});

		var type4 = new Typed('#dialog1', {
			strings: ["Click the button if you wish to contact me!", "Or keep scrolling to see a list of my services", "You can head to the about page to learn more", "Arya Stark dies at the end of season 8", "don't worry Im kidding hehe" ],
			loop: true,
  			loopCount: 6,
			backSpeed: 20,
			backDelay: 1500,
  			typeSpeed: 25
		});

		// Scroll
		function trajectory () {
        	EPPZScrollTo.scrollVerticalToElementById('trajectory', 100);
		}
		function goToAbout () {
        	EPPZScrollTo.scrollVerticalToElementById('about-us', 100);
    	}