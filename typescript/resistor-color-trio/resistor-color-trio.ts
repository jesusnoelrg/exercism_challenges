export type Color = typeof COLORS[number]

export const COLORS: string[] = [
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

export function decodedResistorValue(color: Color[]): string {
  let duoColor: string = color.slice(0, 2).map((c) => COLORS.indexOf(c)).join("");
  let zeros: string = ""

  for(let i = 0; i < COLORS.indexOf(color[2]); i++) zeros += "0";

  let decoded: number = +(duoColor + zeros)

  return metricPrefix(decoded)
}

export const metricPrefix = (value: number) => {
  if (value >= 1000000000) return `${value / 1000000000} gigaohms`;
  if (value >= 1000000) return `${value / 1000000} megaohms`;
  if (value >= 1000) return `${value / 1000} kiloohms`;

  return `${value} ohms`
}