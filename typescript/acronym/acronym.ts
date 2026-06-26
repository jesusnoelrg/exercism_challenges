export function parse(phrase: string): string {
  let ph: string[] = [...phrase.replace('-', ' ')]
  let acronym: string = ph[0]

  for(let i = 1; i < ph.length; i++){
    let currentLetter = ph[i];
    let previousLetter = ph[i - 1]

    if(previousLetter == ' ' || (!isUpperLetter(previousLetter) && isUpperLetter(currentLetter))) acronym += currentLetter
  }

  return acronym.toUpperCase();
}

export const isUpperLetter = (l: string): boolean => !!l.match(/(?=.*?[A-Z])/);