import { SimpleUser } from '../schemas/SimpleUser';
import { SimpleUser } from '../schemas/SimpleUser';
import { SimpleUser } from '../schemas/SimpleUser';
import { AuthorAssociation } from '../schemas/AuthorAssociation';
import { IssueEventDismissedReview } from '../schemas/IssueEventDismissedReview';
import { IssueSimple } from '../schemas/IssueSimple';
import { IssueEventLabel } from '../schemas/IssueEventLabel';
import { IssueEventMilestone } from '../schemas/IssueEventMilestone';
import { IssueEventProjectCard } from '../schemas/IssueEventProjectCard';
import { IssueEventRename } from '../schemas/IssueEventRename';
import { SimpleUser } from '../schemas/SimpleUser';
import { Team } from '../schemas/Team';
import { SimpleUser } from '../schemas/SimpleUser';
/**
 * Issue Event
 */
export interface IssueEvent {
	actor: SimpleUser | null;
	assignee?: SimpleUser | null;
	assigner?: SimpleUser | null;
	author_association?: AuthorAssociation;
	/**
  * @example
6dcb09b5b57875f334f61aebed695e2e4193db5e
  */
	commit_id: string | null;
	/**
  * @example
https://api.github.com/repos/octocat/Hello-World/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e
  */
	commit_url: string | null;
	/**
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	created_at: string;
	dismissed_review?: IssueEventDismissedReview;
	/**
  * @example
closed
  */
	event: string;
	/**
  * @example
1
  */
	id: number;
	issue?: IssueSimple;
	label?: IssueEventLabel;
	lock_reason?: string | null;
	milestone?: IssueEventMilestone;
	/**
  * @example
MDEwOklzc3VlRXZlbnQx
  */
	node_id: string;
	project_card?: IssueEventProjectCard;
	rename?: IssueEventRename;
	requested_reviewer?: SimpleUser | null;
	requested_team?: Team;
	review_requester?: SimpleUser | null;
	/**
  * @format uri
  * @example
https://api.github.com/repos/octocat/Hello-World/issues/events/1
  */
	url: string;
}
