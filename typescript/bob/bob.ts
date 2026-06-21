export function hey(message: string): string {
  let question = isQuestion(message);
  let allUpper = isAllUpperLetters(message);

  if(question && allUpper) return "Calm down, I know what I'm doing!";
  if(allUpper) return "Whoa, chill out!";
  if(question) return "Sure.";
  if(isSilence(message)) return "Fine. Be that way!";

  return "Whatever.";
}

const ALPHABET_LOWER: Array<string> = [...'abcdefghijklmnopqrstuvwxyz'];
const ALPHABET_UPPER: Array<string> = [...'"ABCDEFGHIJKLMNOPQRSTUVWXYZ"']

const isSilence = (text: string): boolean => text.trim().length === 0;
const isQuestion = (text: string): boolean => {
  let withoutSpace = text.trimEnd()
  return [...withoutSpace][withoutSpace.length - 1] === '?';
}
const isAllUpperLetters = (text: string): boolean => [...text].filter(x => !ALPHABET_LOWER.includes(x)).join('') === text && isContainLetters(text)
const isContainLetters = (text: string) => [...text].some(y => ALPHABET_UPPER.includes(y))