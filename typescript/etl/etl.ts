export function transform(old: Record<number, string[]>): Record<string, number> {
  let newForm: Record<string, number> = {}; 

  Object.entries(old).forEach(([key, values]) => {
    for(let v of values.map(x => x.toLowerCase()) as string[]){
      newForm[v] = parseInt(key);
    }
  })

  return newForm;
}
