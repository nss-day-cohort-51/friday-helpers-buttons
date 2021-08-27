import { Milestone } from "./milestone.js";
import { getMilestones } from "./women-milestones.js";

export const MilestoneList = () => {
	const allMilestones = getMilestones();
	let htmlString = "";
	for (const obj of allMilestones){
		htmlString += Milestone(obj)
	}

	return htmlString;
}