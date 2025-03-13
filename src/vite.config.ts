import dts from "vite-plugin-dts";
import DefineOptions from "unplugin-vue-define-options/vite";
import {defineConfig} from "vite";
import requireTransform from 'vite-plugin-require-transform';
export default defineConfig({
    base: "./",
    root: "./",
    build: {
        // sourcemap: true,
        //打包后文件目录
        outDir: "dist",
        reportCompressedSize: true,
        target: 'esnext',
        minify: 'terser',
        // minify: false,
        terserOptions: {
            compress: {
                // 打包自动删除console
                drop_console: true,
                drop_debugger: true
            },
            keep_classnames: true,
        },
        rollupOptions: {
            //忽略打包vue文件
            external: ["@ant-design/colors", "@ctrl/tinycolor", "theme.ts"],
            input: ["./index.ts"],
            output: [
                {
                    //打包格式
                    format: "es",
                    //打包后文件名
                    entryFileNames: "[name].mjs",
                    //让打包目录和我们目录对应
                    preserveModules: false,
                    preserveModulesRoot: "./",
                    exports: "named",
                    //配置打包根目录
                    dir: "./dist",
                },
                {
                    //打包格式
                    format: "cjs",
                    //打包后文件名
                    entryFileNames: "[name].js",
                    //让打包目录和我们目录对应
                    preserveModules: false,
                    preserveModulesRoot: "./",
                    exports: "named",
                    //配置打包根目录
                    dir: "./dist",
                },
            ],
        },

        lib: {
            entry: "./index.ts"
        },
    },
    plugins: [
        dts({
			exclude: ["theme.ts"],
            entryRoot: "./",
            //指定使用的tsconfig.json为我们整个项目根目录下,如果不配置,你也可以在components下新建tsconfig.json
            tsconfigPath: "../tsconfig.json",
        }),
        DefineOptions()
    ]
})
