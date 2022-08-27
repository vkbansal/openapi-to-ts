export interface ProjectsUpdateCardPathParams {
	card_id: number;
}

export interface ProjectsUpdateCardRequestBody {
	/**
	 * Whether or not the card is archived
	 */
	archived?: boolean;
	/**
	 * The project card's note
	 * @example "Update all gems"
	 */
	note?: string | null;
}

export interface ProjectsUpdateCardProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ProjectsUpdateCardPathParams {
	body: ProjectsUpdateCardRequestBody;
}

export async function projectsUpdateCard(props: ProjectsUpdateCardProps) {
	const { card_id, body, ...rest } = props;

	const response = await fetch(`/projects/columns/cards/${card_id}`, {
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
