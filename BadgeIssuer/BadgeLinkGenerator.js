/* 
	Badge Link Generator
	About: Used to create badge
	links and keys

	Created By: Joseph Varilla
	Last EditedL 5/15/2019
*/

class BadgeLinkGenerator {
	constructor(linkBase) {
		this.CryptoJS = require("crypto-js");
		this.linkBase = linkBase;
		this.keyValChars =["0123456789","abcdefghijklmnopqrstuvwxyz"]
	}

	/* generates random int between 
	  0 and one below the arr length */
	getRandomInt(arrLength) {
 	 	return Math.floor(Math.random() * arrLength); 
  	}

  	/* Create a random key with a length
  	   of at least 3 */
	getRandomKey(keyLength = 3)  { //Min of 3 char key
 		let key = '';
  		if (keyLength < 3) {
  		  keyLength = 3;
  		}
		
		for(let keyIdx = 0; keyIdx < keyLength; keyIdx++) {
		 /* Alternate between digits and letters to prevent creation
		 	of  keys that contain profanity */
   		 key += this.keyValChars[keyIdx % 2][this.getRandomInt(this.keyValChars[keyIdx % 2].length)]
  		}
  		return key;
  	}

  	// Merges the bash hash with the base url
  	getBadgeURL(hash, baseWebsiteURL) {
  		return `${baseWebsiteURL}?ebs=${hash}`;
 	 }

 	// Returnts the badge links and the keys
	getBadgeLinks(arrOfBadgeData, keyLength) {
		let arrOfOutput = [];
  		

		// Returns an array of badge links and keys
  		return arrOfBadgeData.map((badge) => {
  			let recipientEmail = badge.recipientEmail;
  			let badgeKey = this.getRandomKey(keyLength);
  			

	        let badgeData = {};

	        for (var key in badge) {
	        	//	Do Not include the recipient's email in the badge hash
   				 if (badge.hasOwnProperty(key) && key !== "recipientEmail") {
       			 	badgeData[key] = badge[key];
    			}
			}

	        let badgeDataString = JSON.stringify(badgeData);
	        let bytes = this.CryptoJS.AES.encrypt(badgeDataString, badgeKey);
	        let badgeHash = bytes.toString();
	        let badgeURL = this.getBadgeURL(badgeHash, this.linkBase);

	        // CSV fields in the final output file
	        return {email: recipientEmail, url: badgeURL, key: badgeKey}
  		});		
	}

}
module.exports = BadgeLinkGenerator;
