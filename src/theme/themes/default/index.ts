import {generate} from '@ant-design/colors';
import type {
    ColorPalettes,
    LegacyColorPalettes,
    PresetColorType,
    SeedMap,
    MapToken
} from '../../interface';
import {defaultPresetColors} from '../colorMap';
import genColorMapToken from '../shared/genColorMap';
import {generateColorPalettes, generateNeutralColorPalettes} from './color';
import genSizeMap from "../shared/genSizeMap";
import genRadiusMap from "../shared/genRadiusMap";
import genFontMap from "../shared/genFontMap";
import genOuterMap from "../shared/genOuterMap";
import genSpacingMap from "../shared/genSpacingMap";


export default function derivative(token: SeedMap): MapToken {

    const colorPresets = Object.keys(defaultPresetColors).map(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        (colorKey: keyof PresetColorType) => {
            const colors = generate(token[colorKey]);
            return new Array(10).fill(1).reduce((pre, _, i) => {
                pre[`${colorKey}-${i + 1}`] = colors[i];
                pre[`${colorKey}${i + 1}`] = colors[i];
                return pre;
            }, {}) as ColorPalettes & LegacyColorPalettes;
        }
    ).reduce(
        (pre, cur) => ({...pre, ...cur}),
        {} as ColorPalettes
    );

    return {
        ...token,
        ...colorPresets,
        // Colors
        ...genColorMapToken(token, {
            generateColorPalettes,
            generateNeutralColorPalettes,
        }),
        // Size
        ...genSizeMap(token),
        // Font
        ...genFontMap(token.fontSize),
        // Radius
        ...genRadiusMap(token.borderRadius),
        ...genOuterMap(token),
        ...genSpacingMap(token)
    } as MapToken;
}