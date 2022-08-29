/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

export interface ProjectsGetCardPathParams {
	card_id: number;
}

export interface ProjectsGetCardProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ProjectsGetCardPathParams {}

/**
 *
 */
export async function projectsGetCard(props: ProjectsGetCardProps) {
	const { card_id, ...rest } = props;

	const response = await fetch(`/projects/columns/cards/${card_id}`, {
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
