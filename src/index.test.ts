import fs from 'fs';
import path from 'path';
import { generateBulbIdenticon } from '.';

const snapshotsDir = path.resolve(`${__dirname}/../snapshots`);

// const generateSnapshot = (value: string): void => {
//   const testBulb = generateBulbIdenticon(value);
//   const testBulbPath = path.resolve(`${snapshotsDir}/${value}Bulb.svg`);
//   fs.writeFileSync(testBulbPath, testBulb);
// };

describe('generateBulbIdenticon', () => {
  it('generates a bulb icon', () => {
    const test1Bulb = generateBulbIdenticon('test1');
    const test1BulbSnapshot = fs.readFileSync(`${snapshotsDir}/test1Bulb.svg`).toString();
    expect(test1Bulb).toBe(test1BulbSnapshot);
    const test2Bulb = generateBulbIdenticon('test2');
    const test2BulbSnapshot = fs.readFileSync(`${snapshotsDir}/test2Bulb.svg`).toString();
    expect(test2Bulb).toBe(test2BulbSnapshot);
    const test3Bulb = generateBulbIdenticon('test3');
    const test3BulbSnapshot = fs.readFileSync(`${snapshotsDir}/test3Bulb.svg`).toString();
    expect(test3Bulb).toBe(test3BulbSnapshot);
    const test4Bulb = generateBulbIdenticon('test4');
    const test4BulbSnapshot = fs.readFileSync(`${snapshotsDir}/test4Bulb.svg`).toString();
    expect(test4Bulb).toBe(test4BulbSnapshot);
  });
});
