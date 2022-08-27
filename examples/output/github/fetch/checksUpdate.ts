export interface ChecksUpdatePathParams {
	owner: string;
	repo: string;
	check_run_id: number;
}

export interface ChecksUpdateRequestBody {
	/**
	 * Possible further actions the integrator can perform, which a user may trigger. Each action includes a `label`, `identifier` and `description`. A maximum of three actions are accepted. See the [`actions` object](https://docs.github.com/rest/reference/checks#actions-object) description. To learn more about check runs and requested actions, see "[Check runs and requested actions](https://docs.github.com/rest/reference/checks#check-runs-and-requested-actions)."
	 */
	actions?: Array<{
		/**
		 * A short explanation of what this action would do. The maximum size is 40 characters.
		 */
		description: string;
		/**
		 * A reference for the action on the integrator's system. The maximum size is 20 characters.
		 */
		identifier: string;
		/**
		 * The text to be displayed on a button in the web UI. The maximum size is 20 characters.
		 */
		label: string;
	}>;
	/**
	 * The time the check completed. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
	 */
	completed_at?: string;
	/**
	 * **Required if you provide `completed_at` or a `status` of `completed`**. The final conclusion of the check. Can be one of `action_required`, `cancelled`, `failure`, `neutral`, `success`, `skipped`, `stale`, or `timed_out`.
	 * **Note:** Providing `conclusion` will automatically set the `status` parameter to `completed`. You cannot change a check run conclusion to `stale`, only GitHub can set this.
	 */
	conclusion?:
		| 'action_required'
		| 'cancelled'
		| 'failure'
		| 'neutral'
		| 'skipped'
		| 'stale'
		| 'success'
		| 'timed_out';
	/**
	 * The URL of the integrator's site that has the full details of the check.
	 */
	details_url?: string;
	/**
	 * A reference for the run on the integrator's system.
	 */
	external_id?: string;
	/**
	 * The name of the check. For example, "code-coverage".
	 */
	name?: string;
	/**
	 * Check runs can accept a variety of data in the `output` object, including a `title` and `summary` and can optionally provide descriptive details about the run. See the [`output` object](https://docs.github.com/rest/reference/checks#output-object-1) description.
	 */
	output?: {
		/**
		 * Adds information from your analysis to specific lines of code. Annotations are visible in GitHub's pull request UI. Annotations are visible in GitHub's pull request UI. The Checks API limits the number of annotations to a maximum of 50 per API request. To create more than 50 annotations, you have to make multiple requests to the [Update a check run](https://docs.github.com/rest/reference/checks#update-a-check-run) endpoint. Each time you update the check run, annotations are appended to the list of annotations that already exist for the check run. For details about annotations in the UI, see "[About status checks](https://help.github.com/articles/about-status-checks#checks)". See the [`annotations` object](https://docs.github.com/rest/reference/checks#annotations-object-1) description for details.
		 */
		annotations?: Array<{
			/**
			 * The level of the annotation. Can be one of `notice`, `warning`, or `failure`.
			 */
			annotation_level: 'failure' | 'notice' | 'warning';
			/**
			 * The end column of the annotation. Annotations only support `start_column` and `end_column` on the same line. Omit this parameter if `start_line` and `end_line` have different values.
			 */
			end_column?: number;
			/**
			 * The end line of the annotation.
			 */
			end_line: number;
			/**
			 * A short description of the feedback for these lines of code. The maximum size is 64 KB.
			 */
			message: string;
			/**
			 * The path of the file to add an annotation to. For example, `assets/css/main.css`.
			 */
			path: string;
			/**
			 * Details about this annotation. The maximum size is 64 KB.
			 */
			raw_details?: string;
			/**
			 * The start column of the annotation. Annotations only support `start_column` and `end_column` on the same line. Omit this parameter if `start_line` and `end_line` have different values.
			 */
			start_column?: number;
			/**
			 * The start line of the annotation.
			 */
			start_line: number;
			/**
			 * The title that represents the annotation. The maximum size is 255 characters.
			 */
			title?: string;
		}>;
		/**
		 * Adds images to the output displayed in the GitHub pull request UI. See the [`images` object](https://docs.github.com/rest/reference/checks#annotations-object-1) description for details.
		 */
		images?: Array<{
			/**
			 * The alternative text for the image.
			 */
			alt: string;
			/**
			 * A short image description.
			 */
			caption?: string;
			/**
			 * The full URL of the image.
			 */
			image_url: string;
		}>;
		/**
		 * Can contain Markdown.
		 */
		summary: string;
		/**
		 * Can contain Markdown.
		 */
		text?: string;
		/**
		 * **Required**.
		 */
		title?: string;
	};
	/**
	 * This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
	 */
	started_at?: string;
	/**
	 * The current status. Can be one of `queued`, `in_progress`, or `completed`.
	 */
	status?: 'completed' | 'in_progress' | 'queued';
}

export interface ChecksUpdateProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ChecksUpdatePathParams {
	body: ChecksUpdateRequestBody;
}

export async function checksUpdate(props: ChecksUpdateProps) {
	const { owner, repo, check_run_id, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/check-runs/${check_run_id}`, {
		method: 'PATCH',
		body: JSON.stringify(body),
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
