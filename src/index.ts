import md5 from 'md5';

import {
  pickFromString,
  generateColorFromHex,
  IdenticonGenerator,
} from './util';

export const generateBulbIdenticon: IdenticonGenerator = (identifier: string) => {
  const digest = md5(identifier);

  const colorThread = generateColorFromHex(
    pickFromString(digest, [1, 2, 3, 4, 20, 21, 22, 23]),
    1,
  ).hex();
  const colorBulbOuter = generateColorFromHex(
    pickFromString(digest, [24, 26, 28, 30, 32, 34, 36, 38]),
    0.8,
  ).hex();
  const colorBulbInner = generateColorFromHex(
    pickFromString(digest, [25, 27, 29, 31, 33, 35, 37, 39]),
    0.4,
  ).hex();
  const colorBulbInnerFill = generateColorFromHex(
    pickFromString(digest, [10, 9, 8, 7, 6, 5, 4, 3]),
    0.4,
  ).hex();
  const colorSocket = generateColorFromHex(
    pickFromString(digest, [20, 19, 15, 16, 17, 9, 10, 13]),
    0.2,
  ).hex();
  const colorRays = generateColorFromHex(
    pickFromString(digest, [3, 2, 16, 13, 20, 21, 19, 15]),
    1,
  ).hex();
  return `
  <?xml version="1.0" encoding="UTF-8" standalone="no"?>
  <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
  <svg width="100%" height="100%" viewBox="0 0 284 284" version="1.1" xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/"
    style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
    <rect id="Artboard1" x="0" y="0" width="283.465" height="283.465" style="fill:none;" />
    <g id="Artboard11" serif:id="Artboard1">
      <g>
        <g id="bulb">
          <path id="bulb-inner"
            d="M130.638,194.169c-1.354,0 -3.953,-3.938 -4.12,-4.283l-25.013,-50.169l0.139,0c-9.792,-17.493 -7.255,-40.048 7.61,-54.913c17.925,-17.925 47.031,-17.925 64.956,-0c14.865,14.865 17.403,37.42 7.611,54.913l0.138,0l-25.013,50.169c-0.166,0.345 -2.766,4.283 -4.119,4.283l-22.189,0Z"
            style="fill:${colorBulbInnerFill};stroke:${colorBulbInner};stroke-width:35px;" />
          <path
            d="M76.576,147.737c-14.416,-27.251 -9.994,-61.62 13.326,-84.46c28.606,-28.018 75.055,-28.018 103.661,-0c23.32,22.84 27.742,57.209 13.326,84.46c-0.208,0.591 -0.464,1.168 -0.765,1.73l-32.912,59.1l0.203,-0.395c-0.341,0.695 -4.677,11.017 -8.179,13.58c-3.159,2.312 -6.398,-0.078 -8.906,-0.078l-29.196,-0c-2.507,-0 -5.747,2.39 -8.905,0.078c-3.502,-2.563 -7.838,-12.885 -8.18,-13.58l0.203,0.395l-32.912,-59.1c-0.3,-0.562 -0.557,-1.139 -0.764,-1.73Zm105.638,-8.695c0.255,-0.742 0.583,-1.464 0.98,-2.159c10.02,-17.533 7.387,-40.133 -7.824,-55.032c-18.565,-18.183 -48.71,-18.183 -67.275,0c-15.212,14.899 -17.844,37.499 -7.824,55.032c0.397,0.695 0.725,1.417 0.979,2.159l31.206,58.312l18.553,-0l31.205,-58.312Z"
            style="fill:${colorBulbOuter};" />
          <clipPath id="_clip1">
            <rect id="glow-thread" x="39.404" y="24.925" width="207.643" height="195.718" />
          </clipPath>
          <g clip-path="url(#_clip1)">
            <path
              d="M130.594,222.742c-14.939,-18.974 -12.942,-39.48 -12.942,-48.238c0,-8.758 8.972,-15.868 13.786,-15.868c4.814,-0 14.208,7.11 14.208,15.868c0,8.758 -3.908,15.869 -8.722,15.869l-0.422,-0c-4.814,-0 -8.722,-7.111 -8.722,-15.869c-0,-8.758 8.972,-15.868 13.786,-15.868c4.814,-0 14.208,7.11 14.208,15.868c-0,8.758 -3.909,15.869 -8.722,15.869l-0.422,-0c-4.814,-0 -8.723,-7.111 -8.723,-15.869c0,-8.758 8.973,-15.868 13.786,-15.868c4.814,-0 14.208,7.11 14.208,15.868c0,8.758 -0.029,30.308 -12.942,48.238"
              style="fill:none;stroke:${colorThread};stroke-width:5px;" />
          </g>
          <path id="bulb-outline"
            d="M118.805,224.869c-0.3,-0.524 -0.579,-1.056 -0.839,-1.595l-39.073,-74.547l0.215,-0c-15.296,-27.327 -11.332,-62.561 11.889,-85.782c28.002,-28.001 73.469,-28.001 101.47,-0c23.222,23.221 27.186,58.455 11.889,85.782l0.216,-0l-39.074,74.547c-0.259,0.539 -0.539,1.071 -0.838,1.595c-1.536,-1.223 -3.482,-1.949 -5.597,-1.949l-34.662,-0c-2.114,-0 -4.06,0.726 -5.596,1.949Z"
            style="fill:none;stroke:#000;stroke-width:5px;" />
        </g>
        <path id="socket"
          d="M162.375,232.151c1.88,1.487 3.084,3.789 3.084,6.37l-0,16.278c-0,4.493 -3.647,8.14 -8.14,8.14l-0.069,-0c-3.393,4.937 -9.08,8.176 -15.518,8.176c-6.437,0 -12.124,-3.239 -15.517,-8.176l-0.07,-0c-4.492,-0 -8.139,-3.647 -8.139,-8.14l-0,-16.278c-0,-2.591 1.213,-4.901 3.106,-6.387l0.016,-0.013c1.379,-1.091 3.123,-1.74 5.017,-1.74l31.174,0c1.902,0 3.652,0.654 5.034,1.753l0.022,0.017Z"
          style="fill:${colorSocket};stroke:#000;stroke-width:5px;" />
      </g>
      <g id="Rays">
        <path d="M141.732,7.238l0,25.526" style="fill:none;stroke:${colorRays};stroke-width:6px;" />
        <path d="M269.826,69.313l-52.023,13.939" style="fill:none;stroke:${colorRays};stroke-width:6px;" />
        <path d="M216.42,10.923l-24.389,34.83" style="fill:none;stroke:${colorRays};stroke-width:6px;" />
        <path d="M259.44,222.752l-62.802,-32.832" style="fill:none;stroke:${colorRays};stroke-width:6px;" />
        <path d="M274.198,145.482l-53.04,-9.352" style="fill:none;stroke:${colorRays};stroke-width:6px;" />
        <path d="M11.604,69.313l52.023,13.939" style="fill:none;stroke:${colorRays};stroke-width:6px;" />
        <path d="M65.01,10.923l24.388,34.83" style="fill:none;stroke:${colorRays};stroke-width:6px;" />
        <path d="M21.989,222.752l62.802,-32.832" style="fill:none;stroke:${colorRays};stroke-width:6px;" />
        <path d="M7.231,145.482l53.04,-9.352" style="fill:none;stroke:${colorRays};stroke-width:6px;" />
      </g>
    </g>
  </svg>
  `.replace(/>\s*/g, '>') // remove aaaall the unnecessary whitespace
    .replace(/\s*</g, '<')
    .split('\n')
    .map((s) => s.trim())
    .join(' ');
};

export default {
  generateBulbIdenticon,
};
