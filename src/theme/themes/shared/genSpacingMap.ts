import type {ColorToken, SeedMap} from '../../interface';

export default function genSpacingMap(token: SeedMap): Pick<
    ColorToken,
    "padding" | "paddingXS" | "paddingS" | "paddingM" | "paddingL" | "paddingXL" |
    "margin" | "marginXS" | "marginS" | "marginM" | "marginL" | "marginXL"
> {
    // const { marginBase, paddingBase } = token;

    return {
        padding: 10,
        paddingXS: 3,
        paddingS: 5,
        paddingM: 10,
        paddingL: 15,
        paddingXL: 20,
        margin: 10,
        marginXS: 3,
        marginS: 5,
        marginM: 10,
        marginL: 15,
        marginXL: 20,
    };
}
