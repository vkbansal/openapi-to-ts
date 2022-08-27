export interface ProjectsMoveCardPathParams {
	card_id: number;
}

export interface ProjectsMoveCardRequestBody {
	/**
	 * The unique identifier of the column the card should be moved to
	 * @example 42
	 */
	column_id?: number;
	/**
	 * The position of the card in a column
	 * @example "bottom"
	 */
	position: string;
}

export interface ProjectsMoveCardProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ProjectsMoveCardPathParams {
	body: ProjectsMoveCardRequestBody;
}

export async function projectsMoveCard(props: ProjectsMoveCardProps) {
	const { card_id, body, ...rest } = props;

	const response = await fetch(`/projects/columns/cards/${card_id}/moves`, {
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
