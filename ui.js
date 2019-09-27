const SkillCard = require('./src/components/SkillCard.js');
const ProjectTile = require('./src/components/ProjectTile.js');

fetch("./skills.json")
  .then(response => response.json())
  .then(json => {
	loadSkillsCards(json)
  });

fetch("./projects.json")
	.then(response => response.json())
	.then(json => {
		loadProjectTiles(json)
	});


let loadSkillsCards = (skillsArr) => {
	let skillCardContainer = document.getElementById("skillsPool");
	skillsArr.forEach(skillObj => {
		let newSkillCard = new SkillCard(skillObj);
		skillCardContainer.append(newSkillCard.getHTMLElement());
	})
}

let metaTypeWriter = (txt, speed, element) => {

	var i = 0;
	function typeWriter(txt, speed) {
      if (i < txt.length) {
		if (txt.charAt(i) == "#") {// BackSpace on #
			element.textContent.slice(0, - 1);
		} else {
			element.textContent += txt.charAt(i);
		}
        
        i++;
        setTimeout(typeWriter, speed, txt.substring(1), speed);
      }
	}
    typeWriter(txt,speed)
}

let splashHeaderNameElement = document.getElementById("splashHeader");
// splashHeaderNameElement.addEventListener('click', function(event) {
// 	console.log("hi")
// 	metaTypeWriter("Hi There :)!############My Name Is##########Joseph Varilla", 40, splashHeaderNameElement)
// })

AOS.init({
  duration: 1200,
  once: true,
});



//---Code for CV Tab Functionality------------------------------------------------
	let selectedItemTab= document.getElementById("background_cv_tab");
	let selectedItemSection = document.getElementById("cv_background");
	selectedItemTab.classList.add("w3-dark-grey");
	selectedItemTab.classList.add("w3-text-white");
	const tabMap = {
			background: cv_background,
			education: cv_education,
			experience: cv_experience,
			// skills: cv_skills,
			honors: cv_honors
		};
	
	function loadTab(event, tabVal) {	
		//Remove Selected Classes From Tab (Removes Highlighting)
		selectedItemTab.classList.remove("w3-dark-grey");
		selectedItemTab.classList.remove("w3-text-white");

		//Hide The Selected Section
		selectedItemSection.hidden = true;

		//Point Selected Section and Tab To The New Ones
		selectedItemTab = event.target;
		selectedItemSection = tabMap[tabVal];

		//HighLight The Selected Tab
		selectedItemTab.classList.add("w3-dark-grey");
		selectedItemTab.classList.add("w3-text-white");

		//Show the selected section
		selectedItemSection.hidden = false;
	}
		
	let backgroundTab = document.getElementById("background_cv_tab");
	let educationTab = document.getElementById("education_cv_tab");
	let experienceTab = document.getElementById("experience_cv_tab");
	// let skillsTab = document.getElementById("skills_cv_tab");
	let awardsTab = document.getElementById("awards_cv_tab");

	backgroundTab.addEventListener('click', function(event) {
		loadTab(event, 'background');
	});

	educationTab.addEventListener('click', function(event) {
		loadTab(event, 'education');
	});

	experienceTab.addEventListener('click', function(event) {
		loadTab(event, 'experience');
	});

	// skillsTab.addEventListener('click', function(event) {
	// 	loadTab(event, 'skills');
	// });

	awardsTab.addEventListener('click', function(event) {
		loadTab(event, 'honors');
	});

	let cvTabIdx = 0;
	let cvTabs = [backgroundTab, educationTab, experienceTab, awardsTab];

	let advanceTabToRight = () => {
		cvTabIdx++;
		cvTabs[cvTabIdx % cvTabs.length].click();
	}

	let advanceTabToLeft = () => {
		cvTabIdx--;
		if (cvTabIdx < 0) {
			cvTabIdx = cvTabs.length -1;
		}
		cvTabs[cvTabIdx % cvTabs.length].click();
	}

	let cvTabContainer = document.getElementById("cv");
	document.addEventListener("keydown", function(event) {
		//Remove Selected Classes From Tab (Removes Highlighting)
		selectedItemTab.classList.remove("w3-dark-grey");
		selectedItemTab.classList.remove("w3-text-white");

		switch(event.keyCode) {
			// Right key press move tab one to right
			case 39: {
				advanceTabToRight();
				break;
			}
			// Left key press move tab to left
			case 37: {
				advanceTabToLeft();
				break;
			}
		}
	})

//---Code For Project Slides------------------------------------------------------------
function noScroll(event) {
	let pageY = event.pageY;

	if (pageY !== undefined) {
		window.scrollTo(0, event.pageY);
	}
	
  }
  
 
//   let slideContainer = document.getElementById("slideContainer")
//   slideContainer.addEventListener("mouseover", function(event) {
// 	// add listener to disable scroll
// 	console.log("focus in")
// 	console.log(event)
// 	window.addEventListener('scroll', noScroll, event);
//   })

//   slideContainer.addEventListener("mouseout", function(event) {
// 	console.log("focus out")
// 	// Remove listener to re-enable scroll
// 	window.removeEventListener('scroll', noScroll);
  
//   })

function revealCaption(event) {
		let captionBlock = event.target.childNodes.filter((child) => {
			child.classList.contains("project-caption-container");
		});
	}

	let focusedCard = null;
	function focusOnProjectSlide(event, elemId) {
		const targetCard = document.getElementById(elemId);
		document.querySelector('div#projects').scrollIntoView();
		if (targetCard !== focusedCard) {
			if (focusedCard) {
				focusedCard.classList.remove('projectCardFocused');
			}
			focusedCard = targetCard;
			loadProjectData(elemId);
		} else {
			hideProjectData();
			focusedCard = null;
		}
		targetCard.classList.toggle('projectCardFocused');
	}



	const projectDataCard = document.getElementById("dynamic-project-data-card");
	let projectTiles = {}
	function loadProjectData(elemId) {
		projectDataCard.classList.remove("projectDataCardInactive");
		projectDataCard.innerHTML = ''
		projectDataCard.append(projectTiles[elemId].getExpandedTileHTMLElement());
	
		
		
		projectDataCard.classList.add("projectDataCardActive");
	}


	function hideProjectData() {
		projectDataCard.innerHTML = ''
		projectDataCard.classList.remove("projectDataCardActive");
		projectDataCard.classList.add("projectDataCardInactive");
	}

	
	let loadProjectTiles = (projectsObj) => {
		let projectTileContainer = document.getElementById("projectTileContainer");
		for (let projectKey in projectsObj) {
			let newProjectTile = new ProjectTile(projectKey, projectsObj[projectKey]);
			projectTiles[`${projectKey}-project-card`] = newProjectTile
			let newProjectTileElement = newProjectTile.getHTMLTileElement();
			newProjectTileElement.addEventListener('click', function(event) {
				focusOnProjectSlide(event, `${projectKey}-project-card`)
			})
			projectTileContainer.append(newProjectTileElement)
		}
	}







