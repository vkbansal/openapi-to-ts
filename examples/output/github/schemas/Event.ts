/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { Actor } from '../schemas/Actor';
import { Actor } from '../schemas/Actor';
import { IssueComment } from '../schemas/IssueComment';
import { IssueSimple } from '../schemas/IssueSimple';
/**
 * Event
 */
export interface Event {
	actor: Actor;
	/**
	 * @format date-time
	 */
	created_at: string | null;
	id: string;
	org?: Actor;
	payload: {
		action: string;
		comment?: IssueComment;
		issue?: IssueSimple;
		pages?: Array<{
			action?: string;
			html_url?: string;
			page_name?: string;
			sha?: string;
			summary?: string | null;
			title?: string;
		}>;
	};
	public: boolean;
	repo: {
		id: number;
		name: string;
		/**
		 * @format uri
		 */
		url: string;
	};
	type: string | null;
}
