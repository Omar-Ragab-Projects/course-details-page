export const handleZero = (number: number) => {
  if (number.toFixed().length == 1) return `0${number}`;
  return number;
};
