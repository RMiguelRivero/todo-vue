const isValid = (value, possibleValues) => possibleValues.includes(value)

import { iconNames } from './iconsNames';
const iconTypes = Object.values(iconNames);
const iconSizes = [10, 12, 14, 16, 20, 24, 64, 128, 256];

const btnSizes = ['large', 'regular', 'small'];
const btnTypes = ['primary', 'secondary', 'terciary'];
const themes = ['dark', 'light'];

export const iconSizeValidator = (value) => isValid(value, iconSizes);
export const iconTypeValidator = (value) => isValid(value, iconTypes);
export const btnSizeValidator = (value) => isValid(value, btnSizes);
export const btnTypesValidator = (value) => isValid(value, btnTypes);
export const themeValidator = (value) => isValid(value, themes);
