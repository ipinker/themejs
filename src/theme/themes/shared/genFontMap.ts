import type { FontMap } from '../../interface';
import genFontSizes from './genFontSizes';

const genFontColorToken = (fontSize: number): FontMap => {
    // const { marginBase, paddingBase } = token;
  const fontSizePairs = genFontSizes(fontSize);
  const fontSizes = fontSizePairs.map((pair) => pair.size);
  const lineHeights = fontSizePairs.map((pair) => pair.lineHeight);
  return {
    fontSizeXXS: fontSizes[0],
    fontSizeXS: fontSizes[0],
    fontSizeS: fontSizes[1],
    fontSize: fontSizes[2],
    fontSizeM: fontSizes[2],
    fontSizeL: fontSizes[3],
    fontSizeXL: fontSizes[4],
    fontSizeXXL: fontSizes[5],

    fontSizeTitle1: fontSizes[6],
    fontSizeTitle2: fontSizes[5],
    fontSizeTitle3: fontSizes[4],
    fontSizeTitle4: fontSizes[3],
    fontSizeTitle5: fontSizes[2],

    lineHeight: lineHeights[2],
    lineHeightXL: lineHeights[4],
    lineHeightL: lineHeights[3],
    lineHeightM: lineHeights[2],
    lineHeightS: lineHeights[1],
    lineHeightXS: lineHeights[0],

    lineHeightTitle1: lineHeights[6],
    lineHeightTitle2: lineHeights[5],
    lineHeightTitle3: lineHeights[4],
    lineHeightTitle4: lineHeights[3],
    lineHeightTitle5: lineHeights[2],
  };
};

export default genFontColorToken;
