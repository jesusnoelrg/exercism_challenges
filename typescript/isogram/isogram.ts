export function isIsogram(text: string): boolean {
  let txtArray: string[] = [...text.trim().replace(/[\s-]+/gm, '')].map(x => x.toLowerCase());
  return txtArray.every(x => txtArray.indexOf(x) === txtArray.lastIndexOf(x))
}
