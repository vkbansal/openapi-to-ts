export interface OrgsRemoveMemberPathParams {
	org: string;
	username: string;
}

export interface OrgsRemoveMemberProps
	extends Omit<RequestInit, 'method' | 'body'>,
		OrgsRemoveMemberPathParams {}

export async function orgsRemoveMember(props: OrgsRemoveMemberProps) {
	const { org, username, ...rest } = props;

	const response = await fetch(`/orgs/${org}/members/${username}`, {
		method: 'DELETE',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
