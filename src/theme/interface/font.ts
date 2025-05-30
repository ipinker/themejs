/**
 * 组件标准字体
 */
export interface FontMap {
  // Font Size
  /**
   * @desc 特小号字体大小
   * @descEN Small font size
   */
  fontSizeXXS: number;
  /**
   * @desc 较小号字体大小
   * @descEN Small font size
   */
  fontSizeXS: number;
  /**
   * @desc 小号字体大小
   * @descEN Small font size
   */
  fontSizeS: number;
  /**
   * @desc 小号字体大小
   * @descEN Normal font size
   */
  fontSizeM: number;
  /**
   * @desc 标准字体大小
   * @descEN Standard font size
   */
  fontSize: number;
  /**
   * @desc 大号字体大小
   * @descEN Large font size
   */
  fontSizeL: number;
  /**
   * @desc 较大号字体大小
   * @descEN Super large font size
   */
  fontSizeXL: number;
  /**
   * @desc 超大号字体大小
   * @descEN Super large font size
   */
  fontSizeXXL: number;

  /**
   * @nameZH 一级标题字号
   * @nameEN Font size of heading level 1
   * @desc H1 标签所使用的字号
   * @descEN Font size of h1 tag.
   * @default 38
   */
  fontSizeTitle1: number;
  /**
   * @nameZH 二级标题字号
   * @nameEN Font size of heading level 2
   * @desc h2 标签所使用的字号
   * @descEN Font size of h2 tag.
   * @default 30
   */
  fontSizeTitle2: number;
  /**
   * @nameZH 三级标题字号
   * @nameEN Font size of heading level 3
   * @desc h3 标签使用的字号
   * @descEN Font size of h3 tag.
   * @default 24
   */
  fontSizeTitle3: number;
  /**
   * @nameZH 四级标题字号
   * @nameEN Font size of heading level 4
   * @desc h4 标签使用的字号
   * @descEN Font size of h4 tag.
   * @default 20
   */
  fontSizeTitle4: number;
  /**
   * @nameZH 五级标题字号
   * @nameEN Font size of heading level 5
   * @desc h5 标签使用的字号
   * @descEN Font size of h5 tag.
   * @default 16
   */
  fontSizeTitle5: number;

  // LineHeight
  /**
   * @desc 文本行高
   * @descEN Line height of text.
   */
  lineHeight: number;
  /**
   * @desc 较大型文本行高
   * @descEN Line height of large text.
   */
  lineHeightXL: number;
  /**
   * @desc 大型文本行高
   * @descEN Line height of large text.
   */
  lineHeightL: number;
  /**
   * @desc 小型文本行高
   * @descEN Line height of small text.
   */
  lineHeightM: number;
  /**
   * @desc 小型文本行高
   * @descEN Line height of small text.
   */
  lineHeightS: number;
  /**
   * @desc 较小型文本行高
   * @descEN Line height of small text.
   */
  lineHeightXS: number;

  /**
   * @nameZH 一级标题行高
   * @nameEN Line height of heading level 1
   * @desc H1 标签所使用的行高
   * @descEN Line height of h1 tag.
   * @default 1.4
   */
  lineHeightTitle1: number;
  /**
   * @nameZH 二级标题行高
   * @nameEN Line height of heading level 2
   * @desc h2 标签所使用的行高
   * @descEN Line height of h2 tag.
   * @default 1.35
   */
  lineHeightTitle2: number;
  /**
   * @nameZH 三级标题行高
   * @nameEN Line height of heading level 3
   * @desc h3 标签所使用的行高
   * @descEN Line height of h3 tag.
   * @default 1.3
   */
  lineHeightTitle3: number;
  /**
   * @nameZH 四级标题行高
   * @nameEN Line height of heading level 4
   * @desc h4 标签所使用的行高
   * @descEN Line height of h4 tag.
   * @default 1.25
   */
  lineHeightTitle4: number;
  /**
   * @nameZH 五级标题行高
   * @nameEN Line height of heading level 5
   * @desc h5 标签所使用的行高
   * @descEN Line height of h5 tag.
   * @default 1.2
   */
  lineHeightTitle5: number;
}
