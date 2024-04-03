import type {MapToken, SeedMap, SeedOption} from "./interface";
import defaultDerivative from "./themes/default"
import darkDerivative from "./themes/dark"
import {seedColors} from "./themes/colorMap";

export type ThemeOptions = {
    themeList?: SeedMap[] | SeedOption[],
    id?: string,
	// 是否生成对应的暗黑主题,
	// false: 则只生成亮色主题
	// true : 每种主题都会生成对应的暗黑主题
	// id生成: blue => blue-light, blue-dark
	// 如果未传入id, id则使用 `${index}-light`,`${index}-dark`
    useDark?: boolean,
	// 平台
	platform?: string,
	// 生成的尺寸是否拼接单位
	useUnit?: boolean
}


export const createThemeList = (options ?: ThemeOptions): MapToken[] => {
	const { themeList = [], useDark } = options || {};
	const mapTokenList: MapToken[] = [];
	if(!themeList || !themeList.length){
	    const defaultTheme = defaultDerivative({... seedColors, id: "light"});
	    const darkTheme = darkDerivative({... seedColors, id: "dark"});
	    mapTokenList.push(defaultTheme);
	    mapTokenList.push(darkTheme);
	}
	else {
		for (let i = 0; i < themeList.length; i ++) {
			const item: SeedMap = themeList[i] as SeedMap;
			const id: string = item.id || `${i}`;
			item.id = useDark ? id + "-light" : id;
			mapTokenList.push(defaultDerivative({
                ... seedColors,
                ... item
            }));
			if(useDark){
				const darkId = id + "-dark";
				mapTokenList.push(darkDerivative({
                    ... seedColors,
                    ... item,
                    id: darkId
                }));
			}
		}
	}
	return mapTokenList;
}


