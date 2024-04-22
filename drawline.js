export const drawLine = (startX, startY, endX, endY) => {
	const line = document.createElement("div");
	line.classList.add("line");

	// Calculate distance
	const distance = Math.sqrt(
		Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2)
	);

	// Calculate angle
	const angle = Math.atan2(endY - startY, endX - startX);

	// Set line position, width, and rotation
	line.style.left = startX + "px";
	line.style.top = startY + "px";
	line.style.width = 0; // Initially set width to 0
	line.style.transform = "rotate(" + angle + "rad)";

	// Add line to the document
	const body = document.querySelector("body");
	body.appendChild(line);

	// Animate line
	setTimeout(() => {
		line.style.transition = "width 2s"; // Set transition (change duration as needed)
		line.style.width = distance + "px"; // Set final width
	}, 0);
};
