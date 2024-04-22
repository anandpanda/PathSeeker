import { graph } from "./graphWweight.js";
import { BinaryHeap } from "./binaryheap.js";

const INF = 2147483647;

export const dijkstra = (source, destination) => {
	const size = Object.keys(graph);

	const distances = new Array(size.length + 1).fill(INF);
	distances[source] = 0;
	const parent = new Array(size.length + 1);

	for (let i = 1; i <= size.length; i++) {
		parent[i] = i;
	}

	let pq = new BinaryHeap((a, b) => a[0] - b[0]);  //compares weight of two nodes
	pq.insert([0, source]); // [distance, node]

	while (pq.data.length > 0) {
		const [dist, curNode] = pq.removeMin();

		graph[curNode].forEach((adj) => {
			const adjNode = adj.n;
			const adjWeight = adj.w;

			const nDist = dist + adjWeight;

			if (nDist < distances[adjNode]) {
				distances[adjNode] = nDist;
				pq.insert([nDist, adjNode]);
				parent[adjNode] = curNode;
			}
		});
	}

	return {
		path: getPath(parent, destination),
		totalDist: distances[destination],
	};
};

function getPath(parent, destination) {
	const path = [];
	let current = destination;
	while (current !== parent[current]) {
		path.unshift(current);
		current = parent[current];
	}
	path.unshift(current);
	return path;
}


