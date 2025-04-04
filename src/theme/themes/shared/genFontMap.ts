import type { FontMap } from '../../interface';
import genFontSizes from './genFontSizes';

const genFontColorToken = (fontSize: number): FontMap => {
  const fontSizePairs = genFontSizes(fontSize);
  const fontSizes = fontSizePairs.map((pair) => pair.size);
  const lineHeights = fontSizePairs.map((pair) => pair.lineHeight);

  return {
    fontSizeXXS: fontSizes[0],
    fontSizeXS: fontSizes[0],
    fontSizeS: fontSizes[0],
    fontSize: fontSizes[1],
    fontSizeM: fontSizes[1],
    fontSizeL: fontSizes[2],
    fontSizeXL: fontSizes[3],
    fontSizeXXL: fontSizes[3],

    fontSizeTitle1: fontSizes[6],
    fontSizeTitle2: fontSizes[5],
    fontSizeTitle3: fontSizes[4],
    fontSizeTitle4: fontSizes[3],
    fontSizeTitle5: fontSizes[2],

    lineHeight: lineHeights[1],
    lineHeightXL: lineHeights[2],
    lineHeightL: lineHeights[2],
    lineHeightM: lineHeights[1],
    lineHeightS: lineHeights[0],
    lineHeightXS: lineHeights[0],

    lineHeightTitle1: lineHeights[6],
    lineHeightTitle2: lineHeights[5],
    lineHeightTitle3: lineHeights[4],
    lineHeightTitle4: lineHeights[3],
    lineHeightTitle5: lineHeights[2],
  };
};

export default genFontColorToken;
