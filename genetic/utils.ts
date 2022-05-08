export const random = (min: number, max: number) => {
	min = Math.ceil(min);
	max = Math.floor(max);

	return Math.floor(Math.random() * (max - min)) + min;
};

const generateLetter = () => {
	const code = random(97, 123);
	return String.fromCharCode(code);
};

export const populateGenome = (length: number) => {
	const genome = [];

	for (let i = 0; i < length; i++) {
		genome.push(generateLetter());
	}

	return genome;
};

type calcFit = {
	genome: Array<String>;
	target: String;
};

export const calculateFitness = ({ genome, target }: calcFit) => {
	let match = 0;

	genome.forEach((g, i) => {
		if (g === target[i]) match += 1;
	});

	return match / target.length;
};

export const mutate = (genome: Array<String>) => {
	const MUTATION_RATE = 0.02;

	let mutatedGenome = [...genome];

	genome.forEach((_, i) => {
		if (Math.random() < MUTATION_RATE) {
			console.log("mutated");
			mutatedGenome[i] = generateLetter();
		}
	});

	// const mutatedGenome = genome.map(g => {
	// 	if (Math.random() < MUTATION_RATE) {
	// 		console.log("mutated");
	// 		g = generateLetter();
	// 	}
	// });

	return mutatedGenome;
};
