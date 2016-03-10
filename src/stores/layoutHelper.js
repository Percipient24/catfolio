export function calculateAcross(viewport) {
	let across = Math.ceil(viewport.width / 400);

	if (across < 2) {
		across = 2;
	}

	return across;
}

export function calculateBGX(index) {
	return index%4 * -400;
}

export function calculateBGY(index) {
	return Math.floor(index/4) * -400;
}

export function calculateBGSize(viewport, across) {
	return 400;//viewport.width/across/400*100*4;
}