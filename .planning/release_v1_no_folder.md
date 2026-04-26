# Implementation Plan: Release v1 (No .planning in Git)

Objective: Create a v1 release tag without the .planning folder in the repository.

Steps:
1. Force push local main to remote to remove the previous commit with .planning.
2. Force tag v1.0.0 on the current commit.
3. Push the tag.
