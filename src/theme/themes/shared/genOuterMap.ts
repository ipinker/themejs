import type {ColorToken, SeedMap} from '../../interface';

export default function genOuterMap(token?: SeedMap): Pick<
    ColorToken,
    "borderWidth" | "borderWidthS" | "borderWidthM" | "borderWidthL" | "borderWidthXL" |
    "boxShadowWidth" | "boxShadowWidthS" | "boxShadowWidthM" | "boxShadowWidthL"
>  {
    // const {  } = token;
    // console.log(token)
    return {
        borderWidth: 1,
        borderWidthS: 0.5,
        borderWidthM: 1,
        borderWidthL: 2,
        borderWidthXL: 4,
        boxShadowWidth: 2,
        boxShadowWidthS: 4,
        boxShadowWidthM: 6,
        boxShadowWidthL: 12,
    };
}
