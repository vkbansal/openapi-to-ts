/**
 * Workflow Run Usage
 */
export interface WorkflowRunUsage {
	billable: {
		MACOS?: {
			jobs: number;
			total_ms: number;
		};
		UBUNTU?: {
			jobs: number;
			total_ms: number;
		};
		WINDOWS?: {
			jobs: number;
			total_ms: number;
		};
	};
	run_duration_ms: number;
}
