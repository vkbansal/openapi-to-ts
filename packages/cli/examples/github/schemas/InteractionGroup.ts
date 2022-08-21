/**
  * The type of GitHub user that can comment, open issues, or create pull requests while the interaction limit is in effect. Can be one of: `existing_users`, `contributors_only`, `collaborators_only`.
  * @example
collaborators_only
  */
export type InteractionGroup = 'collaborators_only' | 'contributors_only' | 'existing_users';
