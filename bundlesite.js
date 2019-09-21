(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
class ProjectTile {
	
	constructor(projectName, projectInfoObj, projectTileFocusFunction) {
		// this.skillCardClassList = 
		// ["w3-card", "w3-center", "w3-padding-32", "w3-hover-opacity",
		// "w3-hover-black", "skillCard"];

		this.projectTileClassList = 
		["projectCard","w3-card","w3-center","w3-padding-32"];

		this.projectCaptionContainerClassList = 
		["project-caption-container", "w3-black", 
			"w3-opacity", "w3-text-white", "overlay"];

		this.projectInfoObj = projectInfoObj;
		this.projectName = projectName;
		this.projectTileFocusFunction = projectTileFocusFunction;
		
	}


	getHTMLTileElement() {
		// Create top level div
		let projectTileElement = document.createElement("div");
		let projectTileElementId = `${this.projectName}-project-card`
		projectTileElement.id = projectTileElementId
		this.projectTileClassList.forEach(className => projectTileElement.classList.add(className));

		projectTileElement.style.backgroundImage = `url('${this.projectInfoObj.imageSrc}')`;

		// Create Caption Container
		let projectCaptionContainerElement = document.createElement("div")
		this.projectCaptionContainerClassList.forEach(className => {
			projectCaptionContainerElement.classList.add(className);
		})

		// Create Text Class Label
		let innerDivElement = document.createElement("div");
		innerDivElement.classList.add("overlay-text");
		
		let projectNameElement = document.createElement("div");
		projectNameElement.textContent = this.projectInfoObj.title;

		// Append the elements
		innerDivElement.append(projectNameElement)
		projectCaptionContainerElement.append(innerDivElement);
		projectTileElement.append(projectCaptionContainerElement);

		projectTileElement.setAttribute("data-aos", "fade-up-left")
		projectTileElement.setAttribute("data-focused-card", false)
		this.htmlElement = projectTileElement;
		
		return projectTileElement;
	}

	getExpandedTileHTMLElement() {
		let elemString = ``;//<div></div>
		
		//Add Title
		elemString += `<h2>${this.projectInfoObj.title}</h2>`;
	
		//Add Date and Status
		elemString += `<h6>Date: ${this.projectInfoObj.date} | 
		Status: <span class='status ${this.projectInfoObj.status}-status'>${this.projectInfoObj.status} </span></h6>`;
		
		//Add Description
		elemString += `<p>${this.projectInfoObj.description}</p>`;
	
	
		//Add Tech Stack
		if (this.projectInfoObj.stack.length > 0) {
			elemString += `<h6>Technologies:`;
	
			this.projectInfoObj.stack.forEach((item) => {
				elemString += `<div class='tech-skill-tag'>${item}</div>`;
			});
	
			elemString += `</h6>`;
		}
		
	
		//Add other Skill list
		if (this.projectInfoObj.skills.length > 0) {
			elemString += `<h6>Skills: <spanclass='other-skill-space'>`;
			for (let skillIdx=0; skillIdx < this.projectInfoObj.skills.length; skillIdx++) {
				if (skillIdx === this.projectInfoObj.skills.length - 1) {//no trailing comma
					elemString += `${this.projectInfoObj.skills[skillIdx]}`
				} else {
					elemString += `${this.projectInfoObj.skills[skillIdx]}, `;
				}	
			}	
			elemString += `</span></h6>`
		}
		elemString += `<br/>`;
		
		//Add link To button
		if (this.projectInfoObj.link.length > 0) {
			elemString += `<h4><a href=${this.projectInfoObj.link}><button class='w3-button w3-text-white w3-black w3-hover-text-black w3-hover-white'>Check it out</button></a></h4>`
		}
	
		//close and return element
		elemString += `<br/>`// </div>
	
		
		let expandedElementTileElement = document.createElement("div");
		expandedElementTileElement.innerHTML = elemString
		//expandedElementTileElement.innerHTML = elemString
	
		return expandedElementTileElement;
		
	}

}

module.exports = ProjectTile;
},{}],2:[function(require,module,exports){
class SkillCard {
	
	constructor(skillObj) {
		this.skillCardClassList = 
		["w3-card", "w3-center", "w3-padding-32", "w3-hover-opacity",
		"w3-hover-black", "skillCard"];

		this.parentSkill = skillObj.parentSkill || "none";
		this.skillClass = skillObj.skillClass || "other";
		this.skillName = skillObj.skillName || "???";

		
	}

	getHTMLElement() {
		// Create Element
		let skillCardElement = document.createElement("div");

		// Add the class information
		this.skillCardClassList.forEach( skillCardClass => {
			skillCardElement.classList.add(skillCardClass);
		});
		
		// Add aos flip animation
		skillCardElement.setAttribute("data-aos", "flip-left" );
		
		// Add attribute for parent skill
		skillCardElement.setAttribute("data-parentskill", this.parentSkill);


		// Add attribute that identifies the skill classification
		skillCardElement.setAttribute("data-skillclass", this.skillclass);

		// append the actual data
		let skillName = document.createElement("h3");
		skillName.textContent = this.skillName;
		skillCardElement.append(skillName);
		
		return skillCardElement;
	}


}

module.exports = SkillCard;
},{}],3:[function(require,module,exports){
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






},{"./ProjectTile":1,"./SkillCard.js":2}]},{},[3]);
