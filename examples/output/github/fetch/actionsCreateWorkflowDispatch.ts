/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface ActionsCreateWorkflowDispatchPathParams {
	owner: string;
	repo: string;
	workflow_id: number & string;
}

export interface ActionsCreateWorkflowDispatchRequestBody {
	/**
	 * Input keys and values configured in the workflow file. The maximum number of properties is 10. Any default properties configured in the workflow file will be used when `inputs` are omitted.
	 */
	inputs?: { '[key: string]'?: string };
	/**
	 * The git reference for the workflow. The reference can be a branch or tag name.
	 */
	ref: string;
}

export interface ActionsCreateWorkflowDispatchProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsCreateWorkflowDispatchPathParams {
	body: ActionsCreateWorkflowDispatchRequestBody;
}

/**
 * You can use this endpoint to manually trigger a GitHub Actions workflow run. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`.
 *
 * You must configure your GitHub Actions workflow to run when the [`workflow_dispatch` webhook](/developers/webhooks-and-events/webhook-events-and-payloads#workflow_dispatch) event occurs. The `inputs` are configured in the workflow file. For more information about how to configure the `workflow_dispatch` event in the workflow file, see "[Events that trigger workflows](/actions/reference/events-that-trigger-workflows#workflow_dispatch)."
 *
 * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint. For more information, see "[Creating a personal access token for the command line](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line)."
 */
export async function actionsCreateWorkflowDispatch(props: ActionsCreateWorkflowDispatchProps) {
	const { owner, repo, workflow_id, ...rest } = props;

	return _fetcher<unknown, unknown, ActionsCreateWorkflowDispatchRequestBody>({
		path: `/repos/${owner}/${repo}/actions/workflows/${workflow_id}/dispatches`,
		method: 'POST',
		...rest,
	});
}
