# Cursor Prompt Pack

## Architecture prompt
Read `docs/architecture.md` and keep all work aligned to those rules. Do not add backend, auth, or unnecessary abstractions.

## Safe feature prompt
Implement only the smallest working version of the requested feature. Avoid unrelated refactors.

## Refactor prompt
Refactor in small slices. Do not change app behavior unless explicitly asked.

## Example prompts

### Build starter structure
Create the minimal file structure for a React + TypeScript + Dexie app based on `docs/architecture.md`.

### Flashcards
Implement flashcard mode using existing lesson content. Keep progress persistence out of the presentation component.

### Multiple choice
Add multiple choice mode using existing lesson content. Reuse shared types and pure helper functions.

### Review queue
Add review queue logic so items answered incorrectly can be reviewed later. Keep it simple.

### Refactor
Extract answer checking logic from page components into `features/study/answerChecker.ts` without changing behavior.