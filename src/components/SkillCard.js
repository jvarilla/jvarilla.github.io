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
		skillCardElement.setAttribute("data-skillclass", this.skillClass);
		skillCardElement.id = `${this.skillName}-skill-card`
		// append the actual data
		let skillName = document.createElement("h3");
		skillName.textContent = this.skillName;
		skillCardElement.append(skillName);
		
		return skillCardElement;
	}


}

module.exports = SkillCard;