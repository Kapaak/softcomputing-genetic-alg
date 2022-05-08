import { createChild, generateMembers, selectMembersForMating } from "./member";
import { random } from "./utils";

interface Props {
	membersCount: number;
	target: String;
}

type Member = {
	genome: Array<String>;
	fitness: number;
};
//pri dalsim kroku udelam bud dalsi funkci generatePopFromMembers a nebo budu
//vkladat uz nejake membery a ty zmutuju

export const generatePopulation = ({ membersCount, target }: Props) => {
	const members = generateMembers({ target, membersCount });
	const maxFitness = Math.max(...members.map(m => m.fitness));

	console.log(members, "max fitness: ", maxFitness);

	return { members, maxFitness };
};

export const nextGeneration = (members: Array<Member>, target: String) => {
	const newGeneration: { genome: String[]; fitness: number }[] = [];
	const matingPool = selectMembersForMating(members);

	members.forEach(() => {
		const parentA = matingPool[random(0, matingPool.length)];
		const parentB = matingPool[random(0, matingPool.length)];

		const child = createChild(target, parentA, parentB);

		console.log(child.genome.toString(), child.fitness, "child");

		newGeneration.push(child);
	});

	const maxFitness = Math.max(...newGeneration.map(m => m.fitness));

	return { members: newGeneration, maxFitness };
	// return newGeneration;

	// members = newGeneration;
};

// export const generatePopulation = ({ membersCount, target }: Props) => {
// 	let members = generateMembers({ target, membersCount });

// 	console.log(members);

// 	const nextGeneration = () => {
// 		const newGeneration: { genome: String[]; fitness: number }[] = [];
// 		const matingPool = selectMembersForMating(members);

// 		members.forEach(() => {
// 			const parentA = matingPool[random(0, matingPool.length)];
// 			const parentB = matingPool[random(0, matingPool.length)];

// 			const child = createChild(target, parentA, parentB);

// 			console.log(child.genome.toString(), child.fitness, "child");

// 			newGeneration.push(child);
// 		});

// 		members = newGeneration;
// 	};

// 	return {
// 		members,
// 		nextGeneration,
// 	};
// };
