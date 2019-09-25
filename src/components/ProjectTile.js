class ProjectTile {
	
	constructor(projectName, projectInfoObj) {
		this.projectTileClassList = 
		["projectCard","w3-card","w3-center","w3-padding-32"];

		this.projectCaptionContainerClassList = 
		["project-caption-container", "w3-black", 
			"w3-opacity", "w3-text-white", "overlay"];

		this.projectInfoObj = projectInfoObj;
		this.projectName = projectName;
		
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