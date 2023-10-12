// https://pic4.zhimg.com/80/v2-999e1ddfbbbc44fcf83e10ab64c5667b_1440w.webp
// https://pic1.zhimg.com/80/v2-6fd23b71719b553fedd6c351694b2a1c_1440w.webp
export default function getFontSizes(base: number) {
    const fontSizes = new Array(10).fill(null).map((_, index) => {
        const i = index - 1;
        const baseSize = base * 2.71828 ** (i / 5);
        const intSize = index > 1 ? Math.floor(baseSize) : Math.ceil(baseSize);

        // Convert to even
        return Math.floor(intSize / 2) * 2;
    });

    fontSizes[1] = base;

    return fontSizes.map((size) => {
        const height = size + 8;

        return {
            size,
            lineHeight: height / size,
        };
    });
}
