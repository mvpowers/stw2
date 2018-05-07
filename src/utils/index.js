export const removeArrEl = (array, element) => array.filter(e => e !== element);

export const uniqueArr = (value, index, self) => self.indexOf(value) === index;

export const uniqueKeyGen = pre => `${pre}_${new Date().getTime()}`;
