import {ColorMap, ColorPalettes, LegacyColorPalettes} from "./colors";
import {SizeMap} from "./size";
import {StyleMap} from "./style";
import {SeedMap} from "./seed";
import {FontMap} from "./font";

export * from "./colors";
export * from "./size";
export * from "./style";
export * from "./font";
export * from "./seed";


export interface MapToken extends
    SeedMap, LegacyColorPalettes, ColorPalettes, ColorMap,
    SizeMap,
    StyleMap,
    FontMap
{
}