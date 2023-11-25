import type {MapToken, SeedMap} from '../../interface';

export default function genSpacingMap(token: SeedMap): Pick<
    MapToken,
    "padding" | "paddingXS" | "paddingSM" | "paddingLG" | "margin" | "marginXS" | "marginSM" | "marginLG"
> {
    // console.log(token)
    // const {  } = token;

    return {
        padding: 6,
        paddingXS: 12,
        paddingSM: 20,
        paddingLG: 30,
        margin: 10,
        marginXS: 20,
        marginSM: 30,
        marginLG: 50,
    };
}
