export interface IssueEventDismissedReview {
	dismissal_commit_id?: string | null;
	dismissal_message: string | null;
	review_id: number;
	state: string;
}
