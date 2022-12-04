'use strict';
/**
 * @param {string} d 
 */
export const part1 = async d => {
	const data = d.split('\n')
		.map(e => parseInt(e, 10))
		.map(e => Math.floor(e / 3) - 2)
		.reduce((p, c) => p + c, 0);
	return data;
};

/**
 * @param {string} d 
 */
export const part2 = async d => {
	const data = d.split('\n')
		.map(e => parseInt(e, 10))
		.map(e => {
			let fuel = Math.floor(e / 3) - 2;
			let total = 0;
			while (fuel > 0) {
				total += fuel;
				fuel = Math.floor(fuel / 3) - 2;
			}
			return total;
		})
		.reduce((p, c) => p + c, 0);
	return data;
};
