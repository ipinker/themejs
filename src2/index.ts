import getAlphaColor from "../src/theme/util/getAlphaColor";
import { MapToken } from "../src/theme/interface";

export const genAlphaColor = getAlphaColor;
 // getAlphaColor;
export { createThemeList } from "../src/theme/index2"

export type { ThemeOptions, ThemeType } from "../src/theme/index"

export type {
    SizeMap,
    StyleMap,
    SeedMap,
    SeedOption,
    FontMap,
    PresetColorKey,
    PresetColorType,
    ColorPalettes
} from "../src/theme/interface";
export type ColorToken = MapToken;


