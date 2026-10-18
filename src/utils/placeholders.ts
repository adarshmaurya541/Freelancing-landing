const PLACEHOLDER_PATTERN = /(\[[A-Z0-9_]+\]|your\.[a-z]+@example\.com|@your_|t\.me\/your_|YOUR_)/i

export function isPlaceholderValue(value: string) {
  return PLACEHOLDER_PATTERN.test(value.trim())
}

export function collectPlaceholderLabels(values: string[]) {
  return values.filter((value) => isPlaceholderValue(value))
}
