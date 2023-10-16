
## 使用 (UniApp)
```javascript
    // main.js 
    import { createSSRApp } from "vue";
    import App from "./App.vue";
    import store, { Pinia } from "./store";
    export function createApp() {
        const app = createSSRApp(App);
        app.use(store);
        return {
            app,
            Pinia // 此处必须将 Pinia 返回
        };
    }
```
```javascript
    // store/index.ts
    import * as pinia from 'pinia';
    export const Pinia = pinia;
    const store = Pinia.createPinia();
    export default store;
```
```javascript
    // store/theme.ts
    import { createThemeStore } from "pink-theme";
    // const useThemeStore = createThemeStore(app: Vue, options: ThemeOptions);
    
    export const useThemeStore = createThemeStore();
```
```vue
    <script>
    // pages/index.vue
    import {useThemeStore} from "@/store/theme";
    const useStore = useThemeStore();
    
    const layoutBgColor = computed(() => useStore.theme?.colorBgLayout);
    console.log(layoutBgColor)
    </script>
```

## 普通使用 (仅生成主题)
```javascript
	// 默认生成 黑,白 两种
	import { createThemeList } from "ipink-theme"
	console.log(createThemeList())
	```
```javascript
	// 自定义颜色值 List<SeedMap>
	import { createThemeList } from "ipink-theme"
	// createThemeList ( app?: Vue, options ?: ThemeOptions )
	const themeList : SeedMap[] = [
		{
			// ... seedColors
		}
	]
	const themeList: MapToken[] = createThemeList(null, {
		themeList,
		// 是否生成对应的暗黑主题, 
		// false: 则只生成亮色主题
		// true : 每种主题都会生成对应的暗黑主题
		// id生成: blue => blue-light, blue-dark
		useDark: false, 
	})
```

## 类型 <SeedMap>
```javascript
// 内置辅助色
const defaultPresetColors : PresetColorType = {
  blue: '#1677ff',   // 蓝
  purple: '#722ED1', // 紫
  cyan: '#13C2C2',   // 青
  green: '#52C41A',  // 绿
  pink: '#eb2f96',   // 粉
  red: '#F5222D',    // 红
  orange: '#FA8C16', // 橘
  yellow: '#FADB14', // 黄
  volcano: '#FA541C',// 火山红
  geekblue: '#2F54EB',//极客蓝
  gossamer: "#069b81",//游丝 
  gold: '#FAAD14',   // 金
  lime: '#A0D911',   // 石墨
  gray: '#818181',   // 灰
} as const;

export const seedColors: SeedMap = {
  id: "light", // 主题id
  // preset color palettes
  ...defaultPresetColors,
  // Color
  colorPrimary: "#1677ff", // 主题sE
  colorSuccess: '#52c41a', // 成功色
  colorWarning: '#faad14', // 警告
  colorError: '#ff4d4f',   // 错误
  colorInfo: '#909399',    // 信息
  colorLink: '',           // 链接
  
  colorTextBase: '',       // 基础文本色
  colorBgBase: '',         // 基础背景色
  colorShadowBase: '',     // 基础阴影


  // Font
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`, // 默认字体
  fontSize: 14,      // 默认字号

  // Radius
  borderRadius: 6,   // 默认圆角

  // Size
  sizeUnit: 4,       
  sizeStep: 4,       
  sizePopupArrow: 16,

  // zIndex
  zIndexBase: 0,     // 默认层级
  zIndexPopupBase: 1000,// 默认遮罩增肌
}
```

## 参考
* Antd-pro 的内置主题生成