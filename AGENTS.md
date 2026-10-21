# AGENTS.md

## DevSpark

- DevSpark framework files live in `.devspark/`.
- Temporary plans and team overrides live in `.devspark.work/`.
- Determine the current git user with `git config user.name`; lowercase, replace spaces with hyphens, and strip non-alphanumeric/hyphen characters.
- Resolve DevSpark commands through the first existing file:
  1. `.devspark.work/{git-user}/commands/devspark.{name}.md`
  2. `.devspark.work/commands/devspark.{name}.md`
  3. `.devspark/defaults/commands/devspark.{name}.md`
- Preserve user work in `.devspark.work/` and `.knowledge/`; upgrades refresh `.devspark/` only.
