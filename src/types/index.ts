export interface Service {
	id: string;
	title: string;
	description: string;
	images?: string[];
}

export interface Project {
	id: string;
	title: string;
	category: string;
	description: string;
	results: string;
	order: number;
	image: string;
}

export interface Stat {
	id: string;
	number: string;
	label: string;
}
