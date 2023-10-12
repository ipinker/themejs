import {TinyColor} from '@ctrl/tinycolor';
import {generate} from '@ant-design/colors';
import type {GenerateColorMap, GenerateNeutralColorMap} from '../colorMap';

export const getAlphaColor = (baseColor: string, alpha: number) =>
    new TinyColor(baseColor).setAlpha(alpha).toRgbString();

export const getSolidColor = (baseColor: string, brightness: number) => {
    const instance = new TinyColor(baseColor);
    return instance.darken(brightness).toHexString();
};


export const generateColorPalettes: GenerateColorMap = (baseColor: string) => {
    const colors = generate(baseColor);
    return {
        1: colors[0],
        2: colors[1],
        3: colors[2],
        4: colors[3],
        5: colors[4],
        6: colors[5],
        7: colors[6],
        8: colors[4],
        9: colors[5],
        10: colors[6],
        // 8: colors[7],
        // 9: colors[8],
        // 10: colors[9],
    };
};

export const generateNeutralColorPalettes: GenerateNeutralColorMap = (
    bgBaseColor: string,
    textBaseColor: string,
    textShadowColor: string,
) => {
    const colorBgBase = bgBaseColor || '#fff';
    const colorTextBase = textBaseColor || '#000';
    const colorShadowBase = textShadowColor || '#000';

    return {
        colorBgBase,
        colorTextBase,
        colorShadowBase: getAlphaColor(colorShadowBase, 0.02),

        colorText: getAlphaColor(colorTextBase, 0.88),
        colorTextSecondary: getAlphaColor(colorTextBase, 0.65),
        colorTextTertiary: getAlphaColor(colorTextBase, 0.45),
        colorTextQuaternary: getAlphaColor(colorTextBase, 0.25),

        colorFill: getAlphaColor(colorTextBase, 0.15),
        colorFillSecondary: getAlphaColor(colorTextBase, 0.06),
        colorFillTertiary: getAlphaColor(colorTextBase, 0.04),
        colorFillQuaternary: getAlphaColor(colorTextBase, 0.02),

        colorBgLayout: getSolidColor(colorBgBase, 4),
        colorBgContainer: getSolidColor(colorBgBase, 0),
        colorBgElevated: getSolidColor(colorBgBase, 0),
        colorBgSpotlight: getAlphaColor(colorTextBase, 0.85),

        colorBorder: getSolidColor(colorBgBase, 15),
        colorBorderSecondary: getSolidColor(colorBgBase, 6),
    };
};
