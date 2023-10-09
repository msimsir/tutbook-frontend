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
  Light = '200',
  Regular = '300',
  Medium = '400',
  SemiBold = '500',
  Bold = '600',
  ExtraBold = '700',
  Black = '800'
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

export enum ParagraphType {
  Overline = '10px',
  Caption = '12px',
  Normal = '16px',
  SubTitle = '20px',
  Title = '24px'
}

export enum HeaderType {
  SubHeader = 1,
  Header,
  LargeHeader,
  OverLargeHeader
}

export enum Variant {
  Primary = 1,
  Secondary,
  Third
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

export interface IBackgroundImageStyle {
  image: string;
  position?: string;
  repeat?: string;
  size?: string;
  attachment?: string;
}

export interface ITextStyles {
  fontWeight?: FontWeight;
  fontStyle?: FontStyle;
  textTransfrom?: TextTransform;
  textAlign?: TextAlign;
  lineHeight?: number;
  fontColor?: string;
}

export interface ISignInUser {
  email: string;
  password: string;
}

export interface ISignUpUser extends ISignInUser {
  firstName: string;
  lastName: string;
}

export interface ISignedInUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  token: string;
}
