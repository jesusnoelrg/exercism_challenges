export let RNA: Record<string, string> = {
  'G': 'C',
  'C': 'G',
  'T': 'A',
  'A': 'U'
};

export function toRna(text: string): string {
  let rna: string = "";

  for(let letter of [...text]){
    const newLetter = RNA[letter]

    if(!newLetter) throw new Error("Invalid input DNA.");
    rna += newLetter;
  }

  return rna;
}
