---
name: add-new-api-endpoint
description: Workflow command scaffold for add-new-api-endpoint in arl-portal.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /add-new-api-endpoint

Use this workflow when working on **add-new-api-endpoint** in `arl-portal`.

## Goal

Implements a new API route for a module or feature, often for a new resource or workflow.

## Common Files

- `src/app/api/*/route.ts`
- `src/app/api/*/[id]/route.ts`
- `src/app/api/*/*/route.ts`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Create or update a file in src/app/api/[module]/[resource]/route.ts or similar.
- If needed, add associated files for sub-resources (e.g., [id]/route.ts, [id]/approve/route.ts).
- Optionally update related modules/components to consume the new endpoint.

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.