export interface ChecksSetSuitesPreferencesPathParams {
	owner: string;
	repo: string;
}

export interface ChecksSetSuitesPreferencesRequestBody {
	/**
	 * Enables or disables automatic creation of CheckSuite events upon pushes to the repository. Enabled by default. See the [`auto_trigger_checks` object](https://docs.github.com/rest/reference/checks#auto_trigger_checks-object) description for details.
	 */
	auto_trigger_checks?: Array<{
		/**
		 * The `id` of the GitHub App.
		 */
		app_id: number;
		/**
		 * Set to `true` to enable automatic creation of CheckSuite events upon pushes to the repository, or `false` to disable them.
		 * @default true
		 */
		setting: boolean;
	}>;
}

export interface ChecksSetSuitesPreferencesProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ChecksSetSuitesPreferencesPathParams {
	body: ChecksSetSuitesPreferencesRequestBody;
}

export async function checksSetSuitesPreferences(props: ChecksSetSuitesPreferencesProps) {
	const { owner, repo, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/check-suites/preferences`, {
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
