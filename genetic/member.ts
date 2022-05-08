import { calculateFitness, mutate, populateGenome, random } from "./utils";

interface Props {
	target: String;
	childGenome?: Array<String>;
}

type Member = {
	genome: Array<String>;
	fitness: number;
};

//first I will care about initial members
export const generateMember = ({ target, childGenome }: Props): Member => {
	const genome = childGenome || populateGenome(target.length);
	const fitness = calculateFitness({ genome, target });

	return {
		genome,
		fitness,
	};
};

interface MultipleProps extends Props {
	membersCount: number;
}

export const generateMembers = ({ target, membersCount }: MultipleProps) => {
	const members = [];

	for (let i = 0; i < membersCount; i++) {
		members.push(generateMember({ target }));
	}

	return members;
};

export const selectMembersForMating = (members: Member[]) => {
	const matingPool: Member[] = [];

	//the more fitness, the more times will the member be present in mating pool
	members.forEach(member => {
		const chanceOfMating = Math.floor(member.fitness * 10) || 1;

		for (let i = 0; i < chanceOfMating; i++) {
			matingPool.push(member);
		}
	});

	return matingPool;
};

const crossover = (parentA: Member, parentB: Member) => {
	const lenght = parentA.genome.length;
	const midpoint = random(0, lenght);
	const childGenome = [];

	//creates mid point and on one side I will have genomes from one parent and on other side other parent
	for (let i = 0; i < lenght; i++) {
		if (i > midpoint) childGenome.push(parentA.genome[i]);
		else childGenome.push(parentB.genome[i]);
	}

	return childGenome;
};

export const createChild = (
	target: String,
	parentA: Member,
	parentB: Member
) => {
	const childGenome = crossover(parentA, parentB);
	const mutatedGenome = mutate(childGenome);

	return generateMember({ target, childGenome: mutatedGenome });
};
