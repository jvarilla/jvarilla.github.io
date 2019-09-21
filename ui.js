const SkillCard = require('./SkillCard.js');
const ProjectTile = require('./ProjectTile');

fetch("./skills.json")
  .then(response => response.json())
  .then(json => {
	loadSkillsCards(json)
	console.log(json);
  });

fetch("./projects.json")
	.then(response => response.json())
	.then(json => {
		loadProjectTiles(json)
		console.log(json)
	});


let loadSkillsCards = (skillsArr) => {
	let skillCardContainer = document.getElementById("skillsPool");
	skillsArr.forEach(skillObj => {
		let newSkillCard = new SkillCard(skillObj);
		skillCardContainer.append(newSkillCard.getHTMLElement());
	})
}


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
			skills: cv_skills,
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
		

//---Code For Project Slides------------------------------------------------------------
	function revealCaption(event) {
		console.log(event.target);
		console.log('children', event.target.childNodes);
		console.log(event.target.childNodes[4]);

		let captionBlock = event.target.childNodes.filter((child) => {
			child.classList.contains("project-caption-container");
		});
	}

	let focusedCard = null;
	function focusOnProjectSlide(event, elemId) {
		console.log("event", event);
		console.log("elemId", elemId);
		const targetCard = document.getElementById(elemId);
		const top = $('div#projects').position().top;
		$(window).scrollTop( top );
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
		console.log(projectTiles[elemId].getExpandedTileHTMLElement())
		
		
		projectDataCard.classList.add("projectDataCardActive");
	}


	function hideProjectData() {
		projectDataCard.innerHTML = ''
		projectDataCard.classList.remove("projectDataCardActive");
		projectDataCard.classList.add("projectDataCardInactive");
	}

	
	let loadProjectTiles = (projectsObj) => {
		let projectTileContainer = document.getElementById("projectTileContainer");
		console.table(projectsObj)
		for (let projectKey in projectsObj) {
			let newProjectTile = new ProjectTile(projectKey, projectsObj[projectKey], focusOnProjectSlide);
			projectTiles[`${projectKey}-project-card`] = newProjectTile
			let newProjectTileElement = newProjectTile.getHTMLTileElement();
			newProjectTileElement.addEventListener('click', function(event) {
				focusOnProjectSlide(event, `${projectKey}-project-card`)
			})
			projectTileContainer.append(newProjectTileElement)
		}
	}

	// "owe-knowe": {
	// 	"title": "Owe Knowe",
	// 	"description": "A web application that allows you to keep track of how much you owe and how much you are owed, complete with interest calculations.",
	// 	"date": "2018",
	// 	"status": "In Development",
	// 	"link": "http://studentweb.cdm.depaul.edu/~jvarilla/IT238/oweKnowe/index.html",
	// 	"imageSrc": "../assets/oweKnowe.PNG",
	// 	"stack": ["jQuery", "jQuery UI", "JavaScript", "HTML", "CSS"],
	// 	"skills": []
	// },





