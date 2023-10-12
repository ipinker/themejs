import type { PresetColorType, SeedMap, ColorNeutralMap } from "../interface"
export interface ColorMap {
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
  10: string;
}

export type GenerateColorMap = (baseColor: string) => ColorMap;

export type GenerateNeutralColorMap = (
  bgBaseColor: string,
  textBaseColor: string,
  shadowBaseColor: string
) => ColorNeutralMap;

export const defaultPresetColors: PresetColorType = {
  blue: '#1677ff',
  purple: '#722ED1',
  cyan: '#13C2C2',
  green: '#52C41A',
  pink: '#eb2f96',
  red: '#F5222D',
  orange: '#FA8C16',
  yellow: '#FADB14',
  volcano: '#FA541C',
  geekblue: '#2F54EB',
  gossamer: "#069b81",
  gold: '#FAAD14',
  lime: '#A0D911',
  gray: '#818181',
} as const;

export const seedColors: SeedMap = {
  id: "light",
  // preset color palettes
  ...defaultPresetColors,
  // Color
  "colorPrimary": "#1677ff",
  colorSuccess: '#52c41a',
  colorWarning: '#faad14',
  colorError: '#ff4d4f',
  colorInfo: '#909399',
  colorLink: '',
  colorTextBase: '',
  colorBgBase: '',
  colorShadowBase: '',


  // Font
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
  fontSize: 14,

  // Radius
  borderRadius: 6,

  // Size
  sizeUnit: 4,
  sizeStep: 4,
  sizePopupArrow: 16,

  // zIndex
  zIndexBase: 0,
  zIndexPopupBase: 1000,
};