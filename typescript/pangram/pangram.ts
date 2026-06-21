const ALPHABET: Array<string> = [
  "a", "b", "c", "d", "e", "f", 
  "g", "h", "i", "j", "k", "l", 
  "m", "n", "o", "p", "q", "r", 
  "s", "t", "u", "v", "w", "x", 
  "y", "z"] as const;

export function isPangram(text: string) {
  const lowerText = text.toLowerCase();

  return ALPHABET.every(x => lowerText.includes(x));
}