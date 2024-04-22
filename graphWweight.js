import { graphWOweight } from "./graphWOweight.js";
import { nodeCoordinates } from "./nodecoordinates.js";

const calcWeight = (n1, n2) => {
	const x1 = nodeCoordinates[n1].x;
	const y1 = nodeCoordinates[n1].y;
	const x2 = nodeCoordinates[n2].x;
	const y2 = nodeCoordinates[n2].y;
	return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};



const numberOfKeys = Object.keys(graphWOweight).length;

export const graph = {
	// 1: [{n:2, w:34}, {n:11, w:45}],
};

for (let i = 1; i <= numberOfKeys; i++) {
	let neigh = [];
	let neighbors = graphWOweight[i].length;
	for (let j = 0; j < neighbors; j++) {
		let neighbor = graphWOweight[i][j];
		let weight = calcWeight(i, neighbor);
		neigh.push({ n: neighbor, w: weight });
	}
	graph[i] = neigh;
}
