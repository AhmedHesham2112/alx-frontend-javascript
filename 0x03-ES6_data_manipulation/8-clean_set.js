export default function cleanSet(set, startString) {
  const arr = [];
  if (typeof set !== 'object' || typeof startString !== 'string' || startString.length === 0) {
    return '';
  }
  for (const word of set) {
    if (word && word.startsWith(startString)) {
      arr.push(word.slice(startString.length));
    }
  }
  return arr.join('-');
}
