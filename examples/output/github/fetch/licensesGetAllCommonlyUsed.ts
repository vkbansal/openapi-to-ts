export interface LicensesGetAllCommonlyUsedQueryParams {
	featured?: boolean;
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface LicensesGetAllCommonlyUsedProps extends Omit<RequestInit, 'method' | 'body'> {
	queryParams: LicensesGetAllCommonlyUsedQueryParams;
}

export async function licensesGetAllCommonlyUsed(props: LicensesGetAllCommonlyUsedProps) {
	const { queryParams, ...rest } = props;

	const response = await fetch(`/licenses`, {
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
