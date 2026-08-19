# Contribution Workflow

1. Create a feature branch from `main` using `developer/<short-change-name>`.
2. Make and test the change inside `Developer` or the appropriate project folder.
3. Push the branch and open a pull request targeting `main`.
4. TeamLead/Boss reviews the pull request and either requests changes or approves it.
5. Only after approval, TeamLead/Boss merges the pull request into `main`.

Direct pushes to `main` are intentionally blocked by the repository branch protection rule.

## GitHub repository setup

In **Settings > Rules > Rulesets** (or **Branches > Branch protection rules**), protect `main` with these requirements:

- Require a pull request before merging.
- Require at least one approving review.
- Require review from Code Owners.
- Dismiss stale approvals when new commits are pushed.
- Restrict who can push to `main` so Developers cannot bypass review.
- Allow only TeamLead/Boss to merge.

The `.github/CODEOWNERS` file assigns the TeamLead/Boss account as the required Code Owner. Update that account if the TeamLead uses a different GitHub username.