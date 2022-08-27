import { useQuery } from '@tanstack/react-query';

export interface OrgsGetAuditLogPathParams {
	org: string;
}

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

export interface UseOrgsGetAuditLogQueryProps extends OrgsGetAuditLogPathParams {
	queryParams: OrgsGetAuditLogQueryParams;
}

export function useOrgsGetAuditLogQuery(props: UseOrgsGetAuditLogQueryProps) {
	const { org, queryParams } = props;

	return useQuery(['orgs/get-audit-log', org, queryParams]);
}
