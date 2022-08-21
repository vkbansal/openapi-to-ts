/**
 * Branch Short
 */
export interface BranchShort {
	commit: {
		sha: string;
		url: string;
	};
	name: string;
	protected: boolean;
}
