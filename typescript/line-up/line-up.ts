export function format(name: string, number: number): string {
  let two_digits: number = (number >= 100) ? number % 50 : number;
  let one_digit: number = (number >= 10) ? number % 5 : number;
  let ordinal: string = "";
  let n: string = number.toString();

  if(two_digits !== 11 && one_digit === 1) ordinal = n + "st"
  else if(two_digits !== 12 && one_digit === 2) ordinal = n + "nd"
  else if(two_digits !== 13 && one_digit === 3) ordinal = n + "rd"
  else ordinal = n + "th"
  
  return `${name}, you are the ${ordinal} customer we serve today. Thank you!`;
}