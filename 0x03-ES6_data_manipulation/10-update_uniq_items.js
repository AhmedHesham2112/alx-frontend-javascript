export default function updateUniqueItems(map) {
  const list = map;
  if (list instanceof Map) {
    for (const [key, value] of map) {
      if (value === 1) {
        list.set(key, 100);
      }
    }
  } else {
    throw new Error('Cannot process');
  }
  return list;
}
