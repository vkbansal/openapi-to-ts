export interface AuditLogGetAuditLogQueryParams {
	phrase?: string;
	include?: 'all' | 'git' | 'web';
	after?: string;
	before?: string;
	order?: 'asc' | 'desc';
	/**
	 * @default 1
	 */
	page?: number;
	/**
	 * @default 30
	 */
	per_page?: number;
}

export interface AuditLogGetAuditLogPathParams {
	enterprise: string;
}

export interface AuditLogGetAuditLogProps
	extends Omit<RequestInit, 'method' | 'body'>,
		AuditLogGetAuditLogPathParams {
	queryParams: AuditLogGetAuditLogQueryParams;
}

export async function auditLogGetAuditLog(props: AuditLogGetAuditLogProps) {
	const { enterprise, queryParams, ...rest } = props;

	const response = await fetch(`/enterprises/${enterprise}/audit-log`, {
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
