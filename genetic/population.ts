import { createChild, generateMembers, selectMembersForMating } from "./member";
import { random } from "./utils";
import { Member, GeneratePopulation, NextPopulation } from "../interfaces";

//creates initial population from selected members count
export const generatePopulation = ({
  membersCount,
  target,
}: GeneratePopulation) => {
  const members = generateMembers({ target, membersCount });
  const maxFitness = Math.max(...members.map((m) => m.fitness));

  return { members, maxFitness, mutations: 0 };
};

export const nextGeneration = ({ members, targetWord }: NextPopulation) => {
  const newGeneration: Array<Member> = [];
  const matingPool = selectMembersForMating(members);

  members.forEach(() => {
    const parentA = matingPool[random(0, matingPool.length)];
    const parentB = matingPool[random(0, matingPool.length)];

    const child = createChild(targetWord, parentA, parentB);

    console.log(child.genome.toString(), child.fitness, "child");

    newGeneration.push(child);
  });

  const mutations = findMutations(newGeneration);

  const maxFitness = Math.max(...newGeneration.map((m) => m.fitness));

  return { members: newGeneration, maxFitness, mutations };
};

const findMutations = (members: Array<Member>) => {
  let mutations = 0;

  members.forEach((member) => {
    if (member.mutated) mutations += 1;
  });

  return mutations;
};
