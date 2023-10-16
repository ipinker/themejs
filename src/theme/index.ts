import { defineStore } from "pinia";
import type {MapToken, SeedMap} from "./interface";
import defaultDerivative from "./themes/default"
import darkDerivative from "./themes/dark"
import {seedColors} from "./themes/colorMap";

export type ThemeOptions = {
    themeList?: SeedMap[],
    id?: string,
	// 是否生成对应的暗黑主题, 
	// false: 则只生成亮色主题
	// true : 每种主题都会生成对应的暗黑主题
	// id生成: blue => blue-light, blue-dark
	// 如果未传入id, id则使用 `${index}-light`,`${index}-dark`
    useDark?: boolean
}

export type ThemeStateType = {
    id: string,
    themeList: MapToken[]
}

export type ThemeType = MapToken | null;

export const createThemeStore = (app?: any, options ?: ThemeOptions) => {
    const { themeList = [] } = options || {};
    const mapTokenList: MapToken[] = [];
    console.log(app)
    if(!themeList.length){
        const defaultTheme = defaultDerivative(seedColors);
        const darkTheme = darkDerivative(seedColors);
        mapTokenList.push(defaultTheme);
        mapTokenList.push(darkTheme);

    }
    const useStore = defineStore("theme", {
        state: (): ThemeStateType => {
            return {
                id: "light",
                themeList: mapTokenList
            };
        },
        getters: {
            theme: (state: ThemeStateType): ThemeType => {
                return state.themeList.find((theme: MapToken) => theme.id === state.id) || null;
            }
        },
        actions: {
            // 切换主题
            change(id: string): ThemeType {
                const theme: ThemeType = this.themeList.find((theme: MapToken) => theme.id === id) || null;
                if (!theme) {
                    console.error("The theme id is not exits!");
                    return null;
                }
                this.id = id;
                return this.theme;
            },
            // 插入主题
            insert(theme: SeedMap): ThemeType {
                console.log(theme)
                // todo ...
                return null;
            },
            // 删除主题
            delete(id: string): number {
                const themeIndex = this.themeList.findIndex((theme: MapToken) => theme.id === id);
                if(themeIndex === -1) return -1;
                this.themeList.splice(themeIndex, 1);
                return themeIndex;
            },
            // 更新主题
            update(id: string, theme?: SeedMap): number {
                const themeIndex = this.themeList.findIndex((theme: MapToken) => theme.id === id);
                if (themeIndex === -1) return -1;
                console.log(theme)
                // todo ...
                return themeIndex;
            },
            // 获取主题
            get(id?: string): ThemeType {
                if (!id) return this.theme;
                return this.themeList.find((theme: MapToken) => theme.id === id) || null;
            }
        }
    })

    return useStore;
};


