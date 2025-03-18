## 说明
1. pinia + vue 使用[createThemeStore]创建一个状态(State)来管理主题; 
2. 直接使用 [createThemeList]直接Create一个主题列表, 然后拿这个列表去做你想做的事. 

## 预览 (Preview)
[`预览链接 (Preview address)`]:https://i.ipink.pink/app/#/pages/components/theme/colorful?title=component.theme.colorful&parentTitle=component.theme.name)

## 使用内置PiniaState (Use built-in states) (Pinia + Vue3)
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
```vue
    <script>
    // pages/index.vue
    import {useThemeStore} from "ipink-theme/theme";
    const useStore = useThemeStore();
    
    const layoutBgColor = computed(() => useStore.theme?.colorBgLayout);
    console.log(layoutBgColor)
    </script>
```
## Vue2 使用内置Store.js  (Store + Vue2)
```javascript
import Theme from "ipink-theme/theme.store"
// ...
const store = new Vuex.Store({
	
	modules:{
		Theme
	},
});
```

## 仅使用主题列表生成 (Use theme list)
```javascript
	import { createThemeList } from "ipink-theme"
	// 1.0.6- 默认生成 黑,白 两种
	console.log(createThemeList()) // mode = dark | light
    // 1.0.7+ 高版本会内置8个主题色16个模式
	console.log(createThemeList())
```
```javascript
	// 自定义颜色值 List<SeedMap>
	import { createThemeList } from "ipink-theme"
	// createThemeList (options ?: ThemeOptions )
	const themeList : SeedMap[] = [
		{
			// ... seedColors 
			// SeedColors成员 参考下方 #类型 <SeedMap>
		}
	]
	const themeList: ColorToken[] = createThemeList({
		themeList,
		// 是否生成对应的暗黑主题, 
		// false: 则只生成亮色主题
		// true : 每种主题都会生成对应的暗黑主题
		// id生成: blue => blue-light, blue-dark
		useDark: false, 
	})
```

## 尺寸型号 (Size)
```javascript
	/**
	 * 关于尺寸型号的说明
	 *    小  <-----正------>  大
	 *    XXS XS SM _ MD LG XL XXL
	 * */
```

## 平台 px/rpx/rem 适配方案 (待做)
* 1. 需要自行做兼容, 后续会在 <ThemeOptions> 类型添加 platform: String
* 2. platform : 支持 UNI: rpx, 自动将原单位*2, WEB: px
* 3. useUnit  : 自动补齐单位
* 4. 针对 WEB-rem , 建议自行写个全局函数处理


## 类型 (Type) <SeedMap>
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
	};

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

	  // ------------- 以下选项用不到可以忽略 -----------------
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
