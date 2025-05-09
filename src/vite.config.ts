import dts from "vite-plugin-dts";
import DefineOptions from "unplugin-vue-define-options/vite";
import {ConfigEnv, defineConfig, UserConfigExport} from "vite";
import requireTransform from 'vite-plugin-require-transform';
export default ({mode}: ConfigEnv): UserConfigExport => {
    let dir = mode == "test" ? "/Users/hfn/i-ui/ipink-theme/dist" : "./dist"
    return {
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
                external: ["theme.ts"],
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
                        dir,
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
                        dir,
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
    }
}
