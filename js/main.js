import { cycleBackgroundColor } from './helpers.js';
import { getMilestones } from './women-milestones.js';
import { MilestoneList} from './MilestoneList.js'

const contentElement = document.querySelector('main');

const arrayOfFish = ["gold Fish", "tang", "shark", "whale", "trout", "Minnow"];

let htmlString = "";
arrayOfFish.forEach(item => {
  htmlString += `<h2 class="fishName ${cycleBackgroundColor()}">${item}</h2>`
})

contentElement.innerHTML = htmlString;

/////////////////////////////////////////
//buttons and clicks

const handleGreetingClicked = (event) => {
	console.log("You are amazing!", event);
}

document.querySelector("#greeting").addEventListener("click", handleGreetingClicked);

document.querySelector("#goodbye").addEventListener("click", event => {
	console.log("Wait, what is event?", event, event.target.id)
});

//addEventListener("first one is what kind of event","second argument is a function")

// get the data and build the list
const applicationElement = document.querySelector("#milestoneList");
applicationElement.innerHTML += MilestoneList();


const handleMilestoneClick = (event) => {
	console.log(event, "event.target", event.target, "event.currentTarget", event.currentTarget);
	if (event.target.id.startsWith("showmore")){
		console.log("you clicked on show more")
		const splitId = event.target.id.split("--");
		console.log("what is splitId", splitId);
		console.log("I want to learn more about id:", splitId[1])
	}
}

applicationElement.addEventListener("click", handleMilestoneClick);