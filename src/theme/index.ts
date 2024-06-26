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

/**
 * @desc 创建一个Pinia for theme; 正在维护， 暂停使用
 * @param app { Vue }
 * @param options { ThemeOptions }
 * @return: 
 */
export const createThemeStore = (app?: any, options ?: ThemeOptions) => {
    const mapTokenList: ColorToken[] = createThemeList(options);
    const useStore = defineStore("theme", {
        state: (): ThemeStateType => {
            return {
                id: "light",
                themeList: mapTokenList
            };
        },
        getters: {
            theme: (state: ThemeStateType): ColorToken | null => {
                return state.themeList.find((theme: ColorToken) => theme.id === state.id) || null;
            }
        },
        actions: {
            // 切换主题
            change(id: string): ColorToken | null {
                const theme: ColorToken | null = this.themeList.find((theme: ColorToken) => theme.id === id) || null;
                if (!theme) {
                    console.error("The theme id is not exits!");
                    return null;
                }
                this.id = id;
                return this.theme;
            },
            // 插入主题
            insert(theme: SeedMap): ColorToken | null {
				const themeList = createThemeList({
					...options,
					themeList: [theme]
				})
				this.themeList = this.themeList.concat(themeList);
                // todo ...
                return null;
            },
            // 删除主题
            delete(id: string): number {
				// 只有一个主题, 禁止删除, 防止主题取不到引发应用崩溃
				if(this.themeList.length < 1) return -1;
                const themeIndex = this.themeList.findIndex((theme: ColorToken) => theme.id === id);
                if(themeIndex === -1) return -1;
                this.themeList.splice(themeIndex, 1);
                return themeIndex;
            },
            // 更新主题
            update(id: string, theme: SeedMap): number {
				if (!theme) return -1;
                const themeIndex = this.themeList.findIndex((theme: ColorToken) => theme.id === id);
                if (themeIndex === -1) return -1;
				this.themeList.splice(themeIndex, 1, { ...this.themeList[themeIndex], ...theme});
                // todo ...
                return themeIndex;
            },
            // 获取主题
            get(id?: string): ColorToken | null {
                if (!id) return this.theme;
                return this.themeList.find((theme: ColorToken) => theme.id === id) || null;
            }
        }
    })

    return useStore;
};


