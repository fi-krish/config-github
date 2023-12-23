module.exports = {
  "webhooks": [
    {
      "config": {
        "url": process.env.DISCORD_WEBHOOK_URL,
        "content_type": "json"
      },
      "events": [
        "branch_protection_configuration",
        "branch_protection_rule",
        "check_run",
        "check_suite",
        "code_scanning_alert",
        "commit_comment",
        "create",
        "delete",
        "dependabot_alert",
        "deploy_key",
        "deployment",
        "deployment_status",
        "discussion",
        "discussion_comment",
        "fork",
        "gollum",
        "issue_comment",
        "issues",
        "label",
        "member",
        "meta",
        "milestone",
        "package",
        "page_build",
        "ping",
        "project_card",
        "project",
        "project_column",
        "public",
        "pull_request",
        "pull_request_review_comment",
        "pull_request_review",
        "pull_request_review_thread",
        "push",
        "registry_package",
        "release",
        "repository_advisory",
        "repository",
        "repository_import",
        "repository_ruleset",
        "repository_vulnerability_alert",
        "secret_scanning_alert",
        "secret_scanning_alert_location",
        "security_and_analysis",
        "star",
        "status",
        "team_add",
        "watch",
        "workflow_job",
        "workflow_run"
      ]
    }
  ]
}