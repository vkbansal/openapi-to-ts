export interface OrgsGetAuditLogQueryParams {
	phrase?: string;
	include?: 'all' | 'git' | 'web';
	after?: string;
	before?: string;
	order?: 'asc' | 'desc';
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface OrgsGetAuditLogPathParams {
	org: string;
}

export interface OrgsGetAuditLogProps
	extends Omit<RequestInit, 'method' | 'body'>,
		OrgsGetAuditLogPathParams {
	queryParams: OrgsGetAuditLogQueryParams;
}

export async function orgsGetAuditLog(props: OrgsGetAuditLogProps) {
	const { org, queryParams, ...rest } = props;

	const response = await fetch(`/orgs/${org}/audit-log`, {
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
