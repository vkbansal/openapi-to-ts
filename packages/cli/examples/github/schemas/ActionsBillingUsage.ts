export interface ActionsBillingUsage {
	/**
	 * The amount of free GitHub Actions minutes available.
	 */
	included_minutes: number;
	minutes_used_breakdown: {
		/**
		 * Total minutes used on macOS runner machines.
		 */
		MACOS?: number;
		/**
		 * Total minutes used on Ubuntu runner machines.
		 */
		UBUNTU?: number;
		/**
		 * Total minutes used on Windows runner machines.
		 */
		WINDOWS?: number;
	};
	/**
	 * The sum of the free and paid GitHub Actions minutes used.
	 */
	total_minutes_used: number;
	/**
	 * The total paid GitHub Actions minutes used.
	 */
	total_paid_minutes_used: number;
}
