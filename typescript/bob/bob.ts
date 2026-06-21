export function hey(message: string): string {
  let question = isQuestion(message);
  let allUpper = isAllUpperLetters(message);

  if(question && allUpper) return "Calm down, I know what I'm doing!";
  if(allUpper) return "Whoa, chill out!";
  if(question) return "Sure.";
  if(isSilence(message)) return "Fine. Be that way!";

  return "Whatever.";
}

const isSilence = (text: string): boolean => text.trim().length === 0;
const isQuestion = (text: string): boolean => text.trim().endsWith('?');
const isAllUpperLetters = (text: string): boolean => text.toUpperCase() === text && isContainLetters(text);
const isContainLetters = (text: string) => /[A-Z]/.test(text);