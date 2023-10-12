
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
