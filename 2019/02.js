'use strict';

import Intcode from './intcode.js';

/**
 * @param {string} d 
 */
export const part1 = async data => {
	const intcode = new Intcode(data);
	intcode.memory[1] = 12;
	intcode.memory[2] = 2;
	while (intcode.running) {
		intcode.step();
	}
	return intcode.memory.slice(0, 20);
};

/**
 * @param {string} d 
 */
export const part2 = async data => {
	for (let n = 0; n < 100; n++) {
		for (let v = 0; v < 100; v++) {
			const intcode = new Intcode(data);
			intcode.memory[1] = n;
			intcode.memory[2] = v;
			while (intcode.running) {
				intcode.step();
			}
			if (intcode.memory[0] == 19690720) {
				return 100 * n + v;
			}
		}
	}
	return 'Error!';
};
