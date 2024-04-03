import type {ColorToken, SeedMap} from '../../interface';

export default function genOuterMap(token?: SeedMap): Pick<
    ColorToken,
    "borderWidth" | "borderWidthXS" | "borderWidthSM" | "borderWidthLG" | "boxShadowWidth" | "boxShadowWidthXS" | "boxShadowWidthSM" | "boxShadowWidthLG"
>  {
    // const {  } = token;
    // console.log(token)
    return {
        borderWidth: 1,
        borderWidthXS: 2,
        borderWidthSM: 4,
        borderWidthLG: 8,
        boxShadowWidth: 2,
        boxShadowWidthXS: 4,
        boxShadowWidthSM: 6,
        boxShadowWidthLG: 12,
    };
}
