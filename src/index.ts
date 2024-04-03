import getAlphaColor from "./theme/util/getAlphaColor";
import { MapToken } from "./theme/interface";

export const genAlphaColor = getAlphaColor;
 // getAlphaColor;
export { createThemeStore, createThemeList } from "./theme/index"

export type { ThemeOptions, ThemeType } from "./theme/index"

export type {
    SizeMap,
    StyleMap,
    SeedMap,
    SeedOption,
    FontMap,
    PresetColorKey,
    PresetColorType,
    ColorPalettes
} from "./theme/interface";

export type ColorToken = MapToken;


