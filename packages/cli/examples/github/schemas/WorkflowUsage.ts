/**
 * Workflow Usage
 */
export interface WorkflowUsage {
	billable: {
		MACOS?: {
			total_ms?: number;
		};
		UBUNTU?: {
			total_ms?: number;
		};
		WINDOWS?: {
			total_ms?: number;
		};
	};
}
