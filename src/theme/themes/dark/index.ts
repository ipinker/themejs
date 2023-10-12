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
import defaultAlgorithm from '../default';

export default function derivative(token: SeedMap, mapToken?: MapToken): MapToken {
    const colorPresets = Object.keys(defaultPresetColors).map(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        (colorKey: keyof PresetColorType) => {
            const colors = generate(token[colorKey], { theme: 'dark' });
            return new Array(10).fill(1).reduce((pre, _, i) => {
                pre[`${colorKey}-${i + 1}`] = colors[i];
                pre[`${colorKey}${i + 1}`] = colors[i];
                return pre;
            }, {}) as ColorPalettes;
        }
    ).reduce((pre, cur) => {
        return { ...pre, ...cur };
    }, {} as ColorPalettes & LegacyColorPalettes);

    const mergedMapToken = mapToken ?? defaultAlgorithm(token);
    mergedMapToken.id = "dark";
    return {
        ...mergedMapToken,
        ...colorPresets,
        // Colors
        ...genColorMapToken(token, {
            generateColorPalettes,
            generateNeutralColorPalettes,
        })
    } as MapToken;
}