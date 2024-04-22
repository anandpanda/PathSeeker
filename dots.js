import { nodeCoordinates } from "./nodecoordinates.js";

const nodeCoordinatesArray = Object.values(nodeCoordinates); // Convert object to array

const image = document.getElementById("map");
const rect = image.getBoundingClientRect();
const rectLeft = rect.left;
const rectTop = rect.top;

for (let i = 0; i < nodeCoordinatesArray.length; i++) {
	const body = document.querySelector("body");
	const point = document.createElement("div");
	point.classList.add("point");
	point.innerHTML = i + 1;

	point.style.left = `${nodeCoordinatesArray[i].x + rectLeft}px`;
	point.style.top = `${nodeCoordinatesArray[i].y + rectTop}px`;
	body.insertBefore(point, body.secondChild);
}
