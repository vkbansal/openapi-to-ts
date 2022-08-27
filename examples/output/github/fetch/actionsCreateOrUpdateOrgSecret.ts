export interface ActionsCreateOrUpdateOrgSecretPathParams {
	org: string;
	secret_name: string;
}

export interface ActionsCreateOrUpdateOrgSecretRequestBody {
	/**
	 * Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get an organization public key](https://docs.github.com/rest/reference/actions#get-an-organization-public-key) endpoint.
	 */
	encrypted_value?: string;
	/**
	 * ID of the key you used to encrypt the secret.
	 */
	key_id?: string;
	/**
	 * An array of repository ids that can access the organization secret. You can only provide a list of repository ids when the `visibility` is set to `selected`. You can manage the list of selected repositories using the [List selected repositories for an organization secret](https://docs.github.com/rest/reference/actions#list-selected-repositories-for-an-organization-secret), [Set selected repositories for an organization secret](https://docs.github.com/rest/reference/actions#set-selected-repositories-for-an-organization-secret), and [Remove selected repository from an organization secret](https://docs.github.com/rest/reference/actions#remove-selected-repository-from-an-organization-secret) endpoints.
	 */
	selected_repository_ids?: string[];
	/**
	 * Configures the access that repositories have to the organization secret. Can be one of:
	 * \- `all` - All repositories in an organization can access the secret.
	 * \- `private` - Private repositories in an organization can access the secret.
	 * \- `selected` - Only specific repositories can access the secret.
	 */
	visibility?: 'all' | 'private' | 'selected';
}

export interface ActionsCreateOrUpdateOrgSecretProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsCreateOrUpdateOrgSecretPathParams {
	body: ActionsCreateOrUpdateOrgSecretRequestBody;
}

export async function actionsCreateOrUpdateOrgSecret(props: ActionsCreateOrUpdateOrgSecretProps) {
	const { org, secret_name, body, ...rest } = props;

	const response = await fetch(`/orgs/${org}/actions/secrets/${secret_name}`, {
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
