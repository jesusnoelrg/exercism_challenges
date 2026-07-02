export function transform(old: Record<number, string[]>): Record<string, number> {
  return Object.entries(old).reduce((acc, [key, values]) => {
    for(let v of values.map(x => x.toLowerCase()) as string[]) acc[v] = parseInt(key);
    return acc
  }, {} as Record<string, number>)
}