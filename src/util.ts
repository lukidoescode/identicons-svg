import Color from 'color';

export type SVG = string;

export type IdenticonGenerator = (identifier: string) => SVG;

export const pickFromString = (pickFrom: string, indices: Array<number>): string => {
  const charArr = indices.map((index) => pickFrom[index % pickFrom.length]);
  return charArr.join('');
};

export const generateColorFromHex = (hex: string, vibrancy: number): Color => {
  if (hex.length !== 8) {
    throw new Error('hex string needs to have a length of 8');
  }
  const hBase = Number.parseInt(hex.substring(0, 4), 16);
  const sBase = Number.parseInt(hex.substring(4, 6), 16);
  const vBase = Number.parseInt(hex.substring(6, 8), 16);
  // console.log({ hBase, sBase, vBase });
  return Color([
    (hBase / 65535) * 360, // 0 - 360
    60 + ((sBase / 255) * 40),
    (80 * vibrancy) + ((vBase / 255) * 70),
  ], 'hsv');
};
