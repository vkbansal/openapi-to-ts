export interface ActionsSetSelectedReposForOrgSecretPathParams {
	org: string;
	secret_name: string;
}

export interface ActionsSetSelectedReposForOrgSecretRequestBody {
	/**
	 * An array of repository ids that can access the organization secret. You can only provide a list of repository ids when the `visibility` is set to `selected`. You can add and remove individual repositories using the [Set selected repositories for an organization secret](https://docs.github.com/rest/reference/actions#set-selected-repositories-for-an-organization-secret) and [Remove selected repository from an organization secret](https://docs.github.com/rest/reference/actions#remove-selected-repository-from-an-organization-secret) endpoints.
	 */
	selected_repository_ids?: number[];
}

export interface ActionsSetSelectedReposForOrgSecretProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsSetSelectedReposForOrgSecretPathParams {
	body: ActionsSetSelectedReposForOrgSecretRequestBody;
}

export async function actionsSetSelectedReposForOrgSecret(
	props: ActionsSetSelectedReposForOrgSecretProps,
) {
	const { org, secret_name, body, ...rest } = props;

	const response = await fetch(`/orgs/${org}/actions/secrets/${secret_name}/repositories`, {
		method: 'PUT',
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
