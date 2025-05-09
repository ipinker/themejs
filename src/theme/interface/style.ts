/**
 * Shape And Styles
 * @Author: Gavin New
 * @Create: 23/07/21 11:32:18
 */
export interface StyleMap {

  /**
   * @desc 一般圆角 4
   */
  borderRadius: number;
  /**
   * @desc XS号圆角，用于组件中的一些小圆角，如 Segmented 、Arrow 等一些内部圆角的组件样式中。8
   */
  borderRadiusS: number;
  /**
   * @desc XS号圆角，用于组件中的一些小圆角，如 Segmented 、Arrow 等一些内部圆角的组件样式中。8
   */
  borderRadiusXS: number;
  /**
   * @desc SM号圆角，用于组件小尺寸下的圆角，如 Button、Input、Select 等输入类控件在 small size 下的圆角 12
   */
  borderRadiusM: number;
  /**
   * @desc LG号圆角，用于组件中的一些大圆角，如 Card、Modal 等一些组件样式。 16
   */
  borderRadiusL: number;
  /**
   * @desc LG号圆角，用于组件中的一些大圆角，如 Card、Modal 等一些组件样式。 16
   */
  borderRadiusXL: number;
  /**
   * @desc 默认边框宽度, 一般用于 按钮, 卡片等, 1
   */
  borderWidth: number;
  /**
   * @desc XS号边框 0.5
   */
  borderWidthS: number;
  /**
   * @desc SM号边框 1
   */
  borderWidthM: number;
  /**
   * @desc LG号边框 2
   */
  borderWidthL: number;
  /**
   * @desc LG号边框 4
   */
  borderWidthXL: number;
  /**
   * @desc 阴影宽度 2
   */
  boxShadowWidth: number;
  /**
   * @desc XS号阴影宽度 4
   */
  boxShadowWidthM: number;
  /**
   * @desc SM号阴影宽度 6
   */
  boxShadowWidthS: number;
  /**
   * @desc LG号阴影宽度 12
   */
  boxShadowWidthL: number;
  /**
   * @desc 默认内边距 6
   */
  padding: number;
  /**
   * @desc 默认内边距 3
   */
  paddingXS: number;
  /**
   * @desc 默认内边距 5
   */
  paddingS: number;
  /**
   * @desc 默认内边距 10
   */
  paddingM: number;
  /**
   * @desc 默认内边距 20
   */
  paddingL: number;
  /**
   * @desc 默认内边距 30
   */
  paddingXL: number;
  /**
   * @desc 默认外边距 10
   */
  margin: number;
  /**
   * @desc 默认外边距 3
   */
  marginXS: number;
  /**
   * @desc 默认外边距 5
   */
  marginS: number;
  /**
   * @desc 默认外边距 10
   */
  marginM: number;
  /**
   * @desc 默认外边距 20
   */
  marginL: number;
  /**
   * @desc 默认外边距 30
   */
  marginXL: number;
}
