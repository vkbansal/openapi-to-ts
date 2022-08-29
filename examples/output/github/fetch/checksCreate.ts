/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

export interface ChecksCreatePathParams {
	owner: string;
	repo: string;
}

export interface ChecksCreateRequestBody {
	/**
	 * Displays a button on GitHub that can be clicked to alert your app to do additional tasks. For example, a code linting app can display a button that automatically fixes detected errors. The button created in this object is displayed after the check run completes. When a user clicks the button, GitHub sends the [`check_run.requested_action` webhook](https://docs.github.com/webhooks/event-payloads/#check_run) to your app. Each action includes a `label`, `identifier` and `description`. A maximum of three actions are accepted. See the [`actions` object](https://docs.github.com/rest/reference/checks#actions-object) description. To learn more about check runs and requested actions, see "[Check runs and requested actions](https://docs.github.com/rest/reference/checks#check-runs-and-requested-actions)." To learn more about check runs and requested actions, see "[Check runs and requested actions](https://docs.github.com/rest/reference/checks#check-runs-and-requested-actions)."
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
	 * **Required if you provide `completed_at` or a `status` of `completed`**. The final conclusion of the check. Can be one of `action_required`, `cancelled`, `failure`, `neutral`, `success`, `skipped`, `stale`, or `timed_out`. When the conclusion is `action_required`, additional details should be provided on the site specified by `details_url`.
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
	 * The URL of the integrator's site that has the full details of the check. If the integrator does not provide this, then the homepage of the GitHub app is used.
	 */
	details_url?: string;
	/**
	 * A reference for the run on the integrator's system.
	 */
	external_id?: string;
	/**
	 * The SHA of the commit.
	 */
	head_sha: string;
	/**
	 * The name of the check. For example, "code-coverage".
	 */
	name: string;
	/**
	 * Check runs can accept a variety of data in the `output` object, including a `title` and `summary` and can optionally provide descriptive details about the run. See the [`output` object](https://docs.github.com/rest/reference/checks#output-object) description.
	 */
	output?: {
		/**
		 * Adds information from your analysis to specific lines of code. Annotations are visible on GitHub in the **Checks** and **Files changed** tab of the pull request. The Checks API limits the number of annotations to a maximum of 50 per API request. To create more than 50 annotations, you have to make multiple requests to the [Update a check run](https://docs.github.com/rest/reference/checks#update-a-check-run) endpoint. Each time you update the check run, annotations are appended to the list of annotations that already exist for the check run. For details about how you can view annotations on GitHub, see "[About status checks](https://help.github.com/articles/about-status-checks#checks)". See the [`annotations` object](https://docs.github.com/rest/reference/checks#annotations-object) description for details about how to use this parameter.
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
		 * Adds images to the output displayed in the GitHub pull request UI. See the [`images` object](https://docs.github.com/rest/reference/checks#images-object) description for details.
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
		 * The summary of the check run. This parameter supports Markdown.
		 */
		summary: string;
		/**
		 * The details of the check run. This parameter supports Markdown.
		 */
		text?: string;
		/**
		 * The title of the check run.
		 */
		title: string;
	};
	/**
	 * The time that the check run began. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
	 */
	started_at?: string;
	/**
	 * The current status. Can be one of `queued`, `in_progress`, or `completed`.
	 * @default "queued"
	 */
	status?: 'completed' | 'in_progress' | 'queued';
}

export interface ChecksCreateProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ChecksCreatePathParams {
	body: ChecksCreateRequestBody;
}

/**
 * **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.
 *
 * Creates a new check run for a specific commit in a repository. Your GitHub App must have the `checks:write` permission to create check runs.
 *
 * In a check suite, GitHub limits the number of check runs with the same name to 1000. Once these check runs exceed 1000, GitHub will start to automatically delete older check runs.
 */
export async function checksCreate(props: ChecksCreateProps) {
	const { owner, repo, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/check-runs`, {
		method: 'POST',
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
