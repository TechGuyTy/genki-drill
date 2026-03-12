export function isCorrectAnswer(expected: string, actual: string): boolean {
    return expected.trim().toLowerCase() === actual.trim().toLowerCase();
  }