import {TinyColor} from '@ctrl/tinycolor';
import type {ColorMap, SeedMap} from '../../interface';
import type {GenerateColorMap, GenerateNeutralColorMap} from '../colorMap';
import getAlphaColor from "../../util/getAlphaColor";

interface PaletteGenerators {
    generateColorPalettes: GenerateColorMap;
    generateNeutralColorPalettes: GenerateNeutralColorMap;
}

export default function genColorMapToken(
    seed: SeedMap,
    {generateColorPalettes, generateNeutralColorPalettes}: PaletteGenerators,
): ColorMap {
    const {
        colorSuccess: colorSuccessBase,
        colorWarning: colorWarningBase,
        colorError: colorErrorBase,
        colorInfo: colorInfoBase,
        colorPrimary: colorPrimaryBase,
        colorBgBase,
        colorTextBase,
        colorShadowBase
    } = seed;

    const primaryColors = generateColorPalettes(colorPrimaryBase);
    const successColors = generateColorPalettes(colorSuccessBase);
    const warningColors = generateColorPalettes(colorWarningBase);
    const errorColors = generateColorPalettes(colorErrorBase);
    const infoColors = generateColorPalettes(colorInfoBase);
    const neutralColors = generateNeutralColorPalettes(colorBgBase, colorTextBase, colorShadowBase);

    // Color Link
    const colorLink = seed.colorLink || seed.colorInfo;
    const linkColors = generateColorPalettes(colorLink);

    return {
        ...neutralColors,

        colorPrimaryBg: primaryColors[1],
        colorPrimaryBgHover: primaryColors[2],
        colorPrimaryBorder: primaryColors[3],
        colorPrimaryBorderHover: primaryColors[4],
        colorPrimaryHover: primaryColors[5],
        colorPrimary: primaryColors[6],
        colorPrimaryActive: primaryColors[7],
        colorPrimaryTextHover: primaryColors[8],
        colorPrimaryText: primaryColors[9],
        colorPrimaryTextActive: primaryColors[10],
        colorPrimaryShadow: getAlphaColor(primaryColors[1], neutralColors.colorBgContainer),

        colorSuccessBg: successColors[1],
        colorSuccessBgHover: successColors[2],
        colorSuccessBorder: successColors[3],
        colorSuccessBorderHover: successColors[4],
        colorSuccessHover: successColors[4],
        colorSuccess: successColors[6],
        colorSuccessActive: successColors[7],
        colorSuccessTextHover: successColors[8],
        colorSuccessText: successColors[9],
        colorSuccessTextActive: successColors[10],
        colorSuccessShadow: getAlphaColor(successColors[1], neutralColors.colorBgContainer),

        colorErrorBg: errorColors[1],
        colorErrorBgHover: errorColors[2],
        colorErrorBorder: errorColors[3],
        colorErrorBorderHover: errorColors[4],
        colorErrorHover: errorColors[5],
        colorError: errorColors[6],
        colorErrorActive: errorColors[7],
        colorErrorTextHover: errorColors[8],
        colorErrorText: errorColors[9],
        colorErrorTextActive: errorColors[10],
        colorErrorShadow: getAlphaColor(errorColors[1], neutralColors.colorBgContainer),

        colorWarningBg: warningColors[1],
        colorWarningBgHover: warningColors[2],
        colorWarningBorder: warningColors[3],
        colorWarningBorderHover: warningColors[4],
        colorWarningHover: warningColors[4],
        colorWarning: warningColors[6],
        colorWarningActive: warningColors[7],
        colorWarningTextHover: warningColors[8],
        colorWarningText: warningColors[9],
        colorWarningTextActive: warningColors[10],
        colorWarningShadow: getAlphaColor(warningColors[1], neutralColors.colorBgContainer),

        colorInfoBg: infoColors[1],
        colorInfoBgHover: infoColors[2],
        colorInfoBorder: infoColors[3],
        colorInfoBorderHover: infoColors[4],
        colorInfoHover: infoColors[4],
        colorInfo: infoColors[6],
        colorInfoActive: infoColors[7],
        colorInfoTextHover: infoColors[8],
        colorInfoText: infoColors[9],
        colorInfoTextActive: infoColors[10],
        colorInfoShadow: getAlphaColor(infoColors[1], neutralColors.colorBgContainer),

        colorLinkHover: linkColors[4],
        colorLink: linkColors[6],
        colorLinkActive: linkColors[7],

        colorBgMask: new TinyColor('#000').setAlpha(0.45).toRgbString(),
        colorWhite: '#fff',
    };
}
