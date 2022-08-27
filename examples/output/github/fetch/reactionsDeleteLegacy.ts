export interface ReactionsDeleteLegacyPathParams {
	reaction_id: number;
}

export interface ReactionsDeleteLegacyProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReactionsDeleteLegacyPathParams {}

export async function reactionsDeleteLegacy(props: ReactionsDeleteLegacyProps) {
	const { reaction_id, ...rest } = props;

	const response = await fetch(`/reactions/${reaction_id}`, {
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
