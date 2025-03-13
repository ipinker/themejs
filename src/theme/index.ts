import { defineStore } from "pinia";
import type {ColorToken, SeedMap} from "./interface";
import defaultDerivative from "./themes/default"
import darkDerivative from "./themes/dark"
import {seedColors} from "./themes/colorMap";
import { SeedOption } from "../theme/interface/seed"

export type ThemeOptions = {
    themeList?: SeedOption[] | SeedMap[],
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

export type ThemeStateType = {
    id: string,
    themeList: ColorToken[],
    modeId?: "dark" | "light"
}

abstract class Config {
	static modeId: "dark" | "light"
	static themeId: string
	static themeList: SeedOption[]
	static setConfig: (options: { themeList: SeedOption[], modeId?: "dark" | "light", themeId?: string }) => void
}
export class ThemeConfig extends Config {
	static modeId: "dark" | "light" = "light"
	static themeId: string = ""
	static themeList: SeedOption[] = [
		{"colorPrimary": "#16AD90", id: "blue", label: "经典蓝"},
		{"colorPrimary": "#FC6572", id: "pink", label: "可爱粉"},
		{"colorPrimary": "#ff4d4f", id: "red", label: "薄暮红"},
		{"colorPrimary": "#fa541c", id: "volcano", label: "火山棕"},
		{"colorPrimary": "#fa8c16", id: "orange", label: "日暮橙"},
		{"colorPrimary": "#73d13d", id: "gossamer", label: "极光绿"},
		{"colorPrimary": "#069b81", id: "green", label: "游丝蓝"},
		{"colorPrimary": "#2f54eb", id: "geekblue", label: "极客蓝"},
	]
	static setConfig(options: { themeList: SeedOption[], modeId?: "dark" | "light", themeId?: string }) {
		Object.keys(options).forEach((key) => {
			// @ts-ignore
			ThemeConfig[key ] = options[key]
		})
	}
}

export const createThemeList = (options ?: ThemeOptions): ColorToken[] => {
	const { themeList = [], useDark } = options || {};
	const mapTokenList: ColorToken[] = [];
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

