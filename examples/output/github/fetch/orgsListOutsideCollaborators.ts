export interface OrgsListOutsideCollaboratorsQueryParams {
	/**
	 * @default "all"
	 */
	filter?: '2fa_disabled' | 'all';
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface OrgsListOutsideCollaboratorsPathParams {
	org: string;
}

export interface OrgsListOutsideCollaboratorsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		OrgsListOutsideCollaboratorsPathParams {
	queryParams: OrgsListOutsideCollaboratorsQueryParams;
}

export async function orgsListOutsideCollaborators(props: OrgsListOutsideCollaboratorsProps) {
	const { org, queryParams, ...rest } = props;

	const response = await fetch(`/orgs/${org}/outside_collaborators`, {
		method: 'GET',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
