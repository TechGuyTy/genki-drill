# Genki Drill Architecture

## Goal
A small local-first Japanese study app for Genki-based lessons.

## Core principles
- Keep MVP small and usable
- No backend for v1
- Use Dexie for local persistence
- Keep lesson content separate from UI
- Keep business logic separate from React components
- Prefer pure functions for quiz/session logic
- Components should mostly render props
- Avoid giant files and unclear ownership

## MVP scope
- Lesson selector
- Flashcards
- Multiple choice
- Save progress locally
- Review missed items

## Not in scope
- Authentication
- Cloud sync
- Social features
- Teacher tools
- AI-generated lessons
- Audio
- Spaced repetition complexity beyond a simple review queue

## Folder ownership
- `data/lessons`: static lesson content
- `types`: shared domain types
- `features/study`: quiz generation and answer checking
- `features/progress`: progress updates and stats
- `features/review`: review queue logic
- `db`: Dexie setup
- `components`: reusable UI only
- `app/routes`: page-level orchestration

## Coding rules
- Use TypeScript everywhere
- No direct Dexie writes inside dumb UI components
- No lesson content embedded in JSX
- Shared types live in `src/types/study.ts`
- Prefer pure functions over class-heavy abstractions
- Refactor in small slices only