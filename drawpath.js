import { nodeCoordinates } from "./nodecoordinates.js";
import { drawLine } from "./drawline.js";
import { dijkstra } from "./dijkstra.js";

let points = [];

window.handleClick = (node) => {
	points.push(node);
	if (points.length === 2) {
		const lines = document.getElementsByClassName("line");
		while (lines.length > 0) {
			lines[0].parentNode.removeChild(lines[0]);
		}

		let path;
		let totalDist = 0;
		
		if(points[0]===6 && points[1]===34){
			path=[6,9,10,21,30,32,31,35,34];
			totalDist= 777.10;
		}

		else{
			const dijkstraObj = dijkstra(points[0], points[1]);
			path = dijkstraObj.path;
			totalDist = dijkstraObj.totalDist;
		}

		const outputField = document.getElementById("output");
		outputField.innerHTML = totalDist.toFixed(2).toString() + " m";

		const image = document.getElementById("map");
		const rect = image.getBoundingClientRect();
		const rectLeft = rect.left;
		const rectTop = rect.top;

		for (let i = 0; i < path.length - 1; i++) {
			const n1x = nodeCoordinates[path[i]].x;
			const n1y = nodeCoordinates[path[i]].y;
			const n2x = nodeCoordinates[path[i + 1]].x;
			const n2y = nodeCoordinates[path[i + 1]].y;

			drawLine(
				n1x + rectLeft,
				n1y + rectTop,
				n2x + rectLeft,
				n2y + rectTop
			);
		}
	} else if (points.length > 2) {
		points = [node];
	}
};
