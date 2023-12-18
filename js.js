const imageArray = [
	"https://i.imgur.com/nmuN2bq.jpeg",
	"https://i.imgur.com/wFbTBkQ.jpeg",
	"https://i.imgur.com/YsdKKKD.jpeg",
	"https://i.imgur.com/sLRNoXm.jpeg",
    "https://i.imgur.com/XcXmKJT.jpeg",
    "https://i.imgur.com/czZ5U2H.jpeg",
    "https://i.imgur.com/2IBfCET.jpeg",
    "https://i.imgur.com/Jqhy2cd.jpeg",
    "https://i.imgur.com/GhjOOEF.jpeg",
    "https://i.imgur.com/DodYhjW.jpeg",
    "https://i.imgur.com/vFTRiGS.jpeg",
    "https://i.imgur.com/z8MfUJF.jpeg",
    "https://i.imgur.com/uIVPjxa.jpeg",
    "https://i.imgur.com/OLd429M.jpeg",
    "https://i.imgur.com/qt3m49X.jpeg",
    "https://i.imgur.com/83bMHL3.jpeg",
    "https://i.imgur.com/YaNt8UE.jpeg",
    "https://i.imgur.com/DuCfnT3.jpeg",
    "https://i.imgur.com/r5kl27f.jpeg",
    "https://i.imgur.com/aerBd3r.png",
    "https://i.imgur.com/y8TWKoz.jpeg",
    
];

const image = document.querySelector("img");
const button = document.querySelector("button");

window.onload = () => generateRandomPicture(imageArray);

button.addEventListener("click", () => generateRandomPicture(imageArray));

function generateRandomPicture(array){
	let randomNum = Math.floor(Math.random() * array.length); 
	image.setAttribute("src", array[randomNum]);
}