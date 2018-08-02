const typeCache = {};

export function type(label) {
  if (typeCache[label]) {
    throw new Error(`Mutation type "${label}" is not unique`);
  }

  typeCache[label] = true;

  return label;
}
