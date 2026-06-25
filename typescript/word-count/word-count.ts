export function count(text: string): Map<string, number> {
  let listTxt = text.toLowerCase().replace(/(?<![a-zA-Z0-9])'|'(?![a-zA-Z0-9])|''/g, '').split(/[^a-z0-9']/);
  let txtMap: Map<string, number> = new Map();

  listTxt
        .map(w => w.trim()).filter(w => (w !== '' && w !== "'"))
        .forEach(word => txtMap.set(word, listTxt.filter(x => word == x).length))

  return txtMap;
}