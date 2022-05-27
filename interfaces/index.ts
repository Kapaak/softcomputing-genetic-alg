export type Member = {
	genome: Array<String>;
	fitness: number;
	mutated:boolean;
};

export type GeneratePopulation = {
    membersCount:number;
    target:String;
}

export type NextPopulation = {
    members: Array<Member>;
    targetWord: String
}