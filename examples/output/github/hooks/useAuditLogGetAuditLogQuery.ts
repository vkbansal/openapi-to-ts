import { useQuery } from '@tanstack/react-query';

export interface AuditLogGetAuditLogPathParams {
	enterprise: string;
}

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

export interface UseAuditLogGetAuditLogQueryProps extends AuditLogGetAuditLogPathParams {
	queryParams: AuditLogGetAuditLogQueryParams;
}

export function useAuditLogGetAuditLogQuery(props: UseAuditLogGetAuditLogQueryProps) {
	const { enterprise, queryParams } = props;

	return useQuery(['audit-log/get-audit-log', enterprise, queryParams]);
}
