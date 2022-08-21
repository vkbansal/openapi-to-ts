export interface PullRequestMinimal {
	base: {
		ref: string;
		repo: {
			id: number;
			name: string;
			url: string;
		};
		sha: string;
	};
	head: {
		ref: string;
		repo: {
			id: number;
			name: string;
			url: string;
		};
		sha: string;
	};
	id: number;
	number: number;
	url: string;
}
