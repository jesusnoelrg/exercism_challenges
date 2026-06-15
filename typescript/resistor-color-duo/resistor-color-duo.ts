export type Color = typeof COLORS[number]

export const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
] as const;

export const decodedValue = (colors: Color[]): number =>
  +colors.slice(0, 2).map((c) => COLORS.indexOf(c)).join("");


