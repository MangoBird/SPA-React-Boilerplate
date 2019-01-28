import { floorTwoDecimal } from './FloorByDecimals';

export const numWithCommas = (num: number) => {
  const aboveDecimal = Math.floor(num);
  const belowDecimal = floorTwoDecimal(num - aboveDecimal);

  let result = aboveDecimal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  if (belowDecimal) {
    const belowDecimalStr = belowDecimal.toString();
    result += belowDecimalStr.slice(1, belowDecimalStr.length);
  }

  return result;
};
