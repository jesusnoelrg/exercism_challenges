export function transform(old: Record<number, string[]>): Record<string, number> {
  return Object.entries(old).reduce((acc, [key, values]) => {
    for(let v of values) acc[v.toLowerCase()] = parseInt(key);
    return acc
  }, {} as Record<string, number>)
}