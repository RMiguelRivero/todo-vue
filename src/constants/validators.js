const isValid = (value, possibleValues) => {
  return possibleValues.includes(value)
}

const iconTypes = [
  'close-x', 'arrow-right', 'email',
  'search', 'hamburger', 'tick', 'circle',
  'circle-tick', 'circle-x', 'circle-attention',
  'circle-checkbox-ticked', 'circle-checkbox-unticked',
];
const iconSizes = [10, 12, 14, 16, 20, 24, 64, 128, 256];

export const iconSizeValidator = (value) => isValid(value, iconSizes);
export const iconTypeValidator = (value) => isValid(value, iconTypes);
