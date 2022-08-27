export interface ProjectsListCardsQueryParams {
	/**
	 * @default "not_archived"
	 */
	archived_state?: 'all' | 'archived' | 'not_archived';
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface ProjectsListCardsPathParams {
	column_id: number;
}

export interface ProjectsListCardsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ProjectsListCardsPathParams {
	queryParams: ProjectsListCardsQueryParams;
}

export async function projectsListCards(props: ProjectsListCardsProps) {
	const { column_id, queryParams, ...rest } = props;

	const response = await fetch(`/projects/columns/${column_id}/cards`, {
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
