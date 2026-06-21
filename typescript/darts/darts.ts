export const CIRCLES = [
  {points: 10, radius: 1},
  {points: 5, radius: 5},
  {points: 1, radius: 10}
] as const

export function score(x: number, y: number): number {
  let xy = x ** 2 + y ** 2;
  
  for(let c of CIRCLES) if(xy <= c.radius ** 2) return c.points

  return 0;
}
