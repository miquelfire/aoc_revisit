export default class Intcode {
	memory;
	#ops;
	#pos;
	running = true;

	/**
	 * 
	 * @param {string} program 
	 */
	constructor(program) {
		this.memory = [];
		this.#pos = 0;
		this.#ops = {
			1: () => {
				this.memory[this.memory[this.#pos + 3]] = this.memory[this.memory[this.#pos + 1]] + this.memory[this.memory[this.#pos + 2]];
				this.#pos += 4;
				return null;
			},
			2: () => {
				this.memory[this.memory[this.#pos + 3]] = this.memory[this.memory[this.#pos + 1]] * this.memory[this.memory[this.#pos + 2]];
				this.#pos += 4;
				return null;
			},
		};

		// Fill memory with the program
		program.split(',').map((v, i) => this.memory[i] = parseInt(v));
	}

	step() {
		if (this.memory[this.#pos] == 99) {
			this.running = false;
			return -1;
		}
		if (!this.running) return -1;
		return this.#ops[this.memory[this.#pos]]();
	}
}

