export type Nullable<T> = T | null;

export enum Size {
  None = 1,
  XXSmall,
  XSmall,
  Small,
  Medium,
  Large,
  XLarge,
  XXLarge,
  Initial,
  Auto
}

export enum Display {
  Block = 1,
  Flex,
  Grid,
  Initial,
  Inline,
  InlineBlock,
  InlineFlex,
  InlineGrid,
  None
}

export enum FlexDirection {
  Row = 1,
  Column,
  RowReverse,
  ColumnReverse,
  Inherit,
  Initial
}

export enum FlexWrap {
  Wrap = 1,
  NoWrap,
  WrapReverse
}

export enum Align {
  Baseline = 1,
  Center,
  FlexStart,
  FlexEnd,
  Start,
  End,
  SelfStart,
  SelfEnd,
  Stretch,
  Inherit,
  Initial
}

export enum Justify {
  Baseline = 1,
  Center,
  SpaceBetween,
  SpaceAround,
  SpaceEvenly,
  FlexStart,
  FlexEnd,
  Start,
  End,
  Stretch,
  Inherit,
  Initial
}

export enum LayoutPosition {
  Absolute = 1,
  Fixed,
  Relative,
  Static,
  Sticky,
  Inherit,
  Initial
}

export enum GridDivision {
  OneToOne = 1,
  OneToTwo,
  OneToThree,
  TwoToOne,
  ThreeToOne
}

export enum ScreenScale {
  Quarter = 1,
  Half,
  HalfAndQuarter,
  Full,
  Initial
}

export enum FontSize {
  Overline = 1,
  Caption,
  Normal,
  SubTitle,
  Title,
  SubHeader,
  Header,
  LargeHeader
}

export enum FontWeight {
  Light = 1,
  Regular,
  Medium,
  SemiBold,
  Bold,
  ExtraBold,
  Black
}

export enum FontStyle {
  Normal = 1,
  Italic,
  Oblique,
  Initial,
  Inherit
}

export enum TextTransform {
  Capitalize = 1,
  UpperCase,
  LowerCase
}

export enum TextAlign {
  Left = 1,
  Right,
  Center,
  Justify,
  Initial,
  Inherit
}

export interface INavItem {
  name: string;
  route: string;
}

export interface IPaddingStyles {
  paddingTop?: Size;
  paddingBottom?: Size;
  paddingLeft?: Size;
  paddingRight?: Size;
}

export interface IMarginStyles {
  marginTop?: Size;
  marginBottom?: Size;
  marginLeft?: Size;
  marginRight?: Size;
}

export interface IDimensionStyles {
  height?: ScreenScale;
  width?: ScreenScale;
  percentHeight?: number;
  percentWidth?: number;
  absoluteHeight?: number;
  absoluteWidth?: number;
}

export interface ITransitionStyle {
  transitionProperty?: string;
  transitionDuration?: string;
  transitionFunction?: string;
}
