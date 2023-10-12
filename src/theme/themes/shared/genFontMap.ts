import type { FontMap } from '../../interface';
import genFontSizes from './genFontSizes';

const genFontMapToken = (fontSize: number): FontMap => {
  const fontSizePairs = genFontSizes(fontSize);
  const fontSizes = fontSizePairs.map((pair) => pair.size);
  const lineHeights = fontSizePairs.map((pair) => pair.lineHeight);

  return {
    fontSizeSM: fontSizes[0],
    fontSize: fontSizes[1],
    fontSizeLG: fontSizes[2],
    fontSizeXL: fontSizes[3],

    fontSizeTitle1: fontSizes[6],
    fontSizeTitle2: fontSizes[5],
    fontSizeTitle3: fontSizes[4],
    fontSizeTitle4: fontSizes[3],
    fontSizeTitle5: fontSizes[2],

    lineHeight: lineHeights[1],
    lineHeightLG: lineHeights[2],
    lineHeightSM: lineHeights[0],

    lineHeightTitle1: lineHeights[6],
    lineHeightTitle2: lineHeights[5],
    lineHeightTitle3: lineHeights[4],
    lineHeightTitle4: lineHeights[3],
    lineHeightTitle5: lineHeights[2],
  };
};

export default genFontMapToken;
