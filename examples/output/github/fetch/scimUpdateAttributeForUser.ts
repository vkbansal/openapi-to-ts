export interface ScimUpdateAttributeForUserPathParams {
	org: string;
	scim_user_id: string;
}

export interface ScimUpdateAttributeForUserRequestBody {
	/**
	 * Set of operations to be performed
	 * @example [{"op":"replace","value":{"active":false}}]
	 */
	Operations: Array<{
		op: 'add' | 'remove' | 'replace';
		path?: string;
		value?: {
			active?: boolean | null;
			externalId?: string | null;
			familyName?: string | null;
			givenName?: string | null;
			userName?: string | null;
		} & Array<{
			primary?: boolean;
			value?: string;
		}> &
			string;
	}>;
	schemas?: string[];
}

export interface ScimUpdateAttributeForUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ScimUpdateAttributeForUserPathParams {
	body: ScimUpdateAttributeForUserRequestBody;
}

export async function scimUpdateAttributeForUser(props: ScimUpdateAttributeForUserProps) {
	const { org, scim_user_id, body, ...rest } = props;

	const response = await fetch(`/scim/v2/organizations/${org}/Users/${scim_user_id}`, {
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
