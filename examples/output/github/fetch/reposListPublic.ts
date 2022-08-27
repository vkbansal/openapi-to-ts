export interface ReposListPublicQueryParams {
	since?: number;
}

export interface ReposListPublicProps extends Omit<RequestInit, 'method' | 'body'> {
	queryParams: ReposListPublicQueryParams;
}

export async function reposListPublic(props: ReposListPublicProps) {
	const { queryParams, ...rest } = props;

	const response = await fetch(`/repositories`, {
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
