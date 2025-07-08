import {generate} from '@ant-design/colors';
import type {
    ColorPalettes,
    PresetColorType,
    SeedMap,
    ColorToken
} from '../../interface';
import {defaultPresetColors} from '../colorMap';
import genColorColorToken from '../shared/genColorMap';
import {generateColorPalettes, generateNeutralColorPalettes} from './color';
import defaultAlgorithm from '../default';

export default function derivative(token: SeedMap, mapToken?: ColorToken): ColorToken {
    // @ts-ignore
    const colorPresets = Object.keys(defaultPresetColors).concat(["colorPrimary","colorSuccess","colorWarning","colorError","colorInfo"]).map(
        // @ts-ignore
        (colorKey: keyof PresetColorType) => {
            const colors = generate(token[colorKey], { theme: 'dark' });
            return new Array(10).fill(1).reduce((pre, _, i) => {
                pre[`${colorKey}${i + 1}`] = colors[i];
                return pre;
            }, {}) as ColorPalettes;
        }
    // @ts-ignore
    ).reduce((pre, cur) => {
        return { ...pre, ...cur };
    }, {} as ColorPalettes);

    const mergedColorToken = mapToken ?? defaultAlgorithm(token);
    mergedColorToken.id =  mergedColorToken.id || "dark";
    return {
        ...mergedColorToken,
        ...colorPresets,
        // Colors
        ...genColorColorToken(token, {
            generateColorPalettes,
            generateNeutralColorPalettes,
        })
    } as ColorToken;
}
