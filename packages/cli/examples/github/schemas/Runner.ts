/**
 * A self hosted runner
 */
export interface Runner {
	busy: boolean;
	/**
  * The id of the runner.
  * @example
5
  */
	id: number;
	labels: Array<{
		/**
		 * Unique identifier of the label.
		 */
		id?: number;
		/**
		 * Name of the label.
		 */
		name?: string;
		/**
		 * The type of label. Read-only labels are applied automatically when the runner is configured.
		 */
		type?: 'custom' | 'read-only';
	}>;
	/**
  * The name of the runner.
  * @example
iMac
  */
	name: string;
	/**
  * The Operating System of the runner.
  * @example
macos
  */
	os: string;
	/**
  * The status of the runner.
  * @example
online
  */
	status: string;
}
