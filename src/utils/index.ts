import '../assets/_global.scss';
import {
  Align,
  Display,
  FlexDirection,
  FlexWrap,
  FontSize,
  FontStyle,
  FontWeight,
  GridDivision,
  Justify,
  LayoutPosition,
  ScreenScale,
  Size
} from '@/types';

export const renderDisplayClass = (display: Display) => {
  switch (display) {
    case Display.Block:
      return `ct-block`;
    case Display.Flex:
      return `ct-flex`;
    case Display.Grid:
      return `ct-grid`;
    case Display.Initial:
      return `ct-initial`;
    case Display.Inline:
      return `ct-inline`;
    case Display.InlineBlock:
      return `ct-inline-block`;
    case Display.InlineFlex:
      return `ct-inline-flex`;
    case Display.InlineGrid:
      return `ct-inline-grid`;
    case Display.None:
      return `ct-none`;
    default:
      return `ct-block`;
  }
};

export const renderFlexDirectionClass = (direction: FlexDirection) => {
  switch (direction) {
    case FlexDirection.Row:
      return `fl-d-row`;
    case FlexDirection.Column:
      return `fl-d-col`;
    case FlexDirection.RowReverse:
      return `fl-d-row-rev`;
    case FlexDirection.ColumnReverse:
      return `fl-d-col-rev`;
    case FlexDirection.Inherit:
      return `fl-d-inherit`;
    case FlexDirection.Initial:
      return `fl-d-init`;
    default:
      return `fl-d-row`;
  }
};

export const renderAlignItemsClass = (align: Align) => {
  switch (align) {
    case Align.Baseline:
      return `ai-base`;
    case Align.Center:
      return `ai-center`;
    case Align.FlexStart:
      return `ai-flstart`;
    case Align.FlexEnd:
      return `ai-flend`;
    case Align.Start:
      return `ai-start`;
    case Align.End:
      return `ai-end`;
    case Align.SelfStart:
      return `ai-sfstart`;
    case Align.SelfEnd:
      return `ai-sfend`;
    case Align.Stretch:
      return `ai-stretch`;
    case Align.Inherit:
      return `ai-inherit`;
    case Align.Initial:
      return `ai-init`;
    default:
      return `ai-flstart`;
  }
};

export const renderJustifyContentClass = (justify: Justify) => {
  switch (justify) {
    case Justify.Baseline:
      return `jc-baseline`;
    case Justify.Center:
      return `jc-center`;
    case Justify.SpaceBetween:
      return `jc-sp-btwn`;
    case Justify.SpaceAround:
      return `jc-sp-arnd`;
    case Justify.SpaceEvenly:
      return `jc-sp-evl`;
    case Justify.FlexStart:
      return `jc-flstart`;
    case Justify.FlexEnd:
      return `jc-flend`;
    case Justify.Start:
      return `jc-start`;
    case Justify.End:
      return `jc-end`;
    case Justify.Stretch:
      return `jc-stretch`;
    case Justify.Inherit:
      return `jc-inherit`;
    case Justify.Initial:
      return `jc-initial`;
    default:
      return `jc-flstart`;
  }
};

export const renderFlexWrapClass = (wrap: FlexWrap) => {
  switch (wrap) {
    case FlexWrap.Wrap:
      return `fl-wrap`;
    case FlexWrap.NoWrap:
      return `fl-nowrap`;
    case FlexWrap.WrapReverse:
      return `fl-wrap-rev`;
    default:
      return `fl-nowrap`;
  }
};

export const renderLayoutPositionClass = (layoutPosition: LayoutPosition) => {
  switch (layoutPosition) {
    case LayoutPosition.Absolute:
      return `ps-abs`;
    case LayoutPosition.Fixed:
      return `ps-fix`;
    case LayoutPosition.Relative:
      return `ps-rel`;
    case LayoutPosition.Static:
      return `ps-sta`;
    case LayoutPosition.Sticky:
      return `ps-stc`;
    case LayoutPosition.Inherit:
      return `ps-inherit`;
    case LayoutPosition.Initial:
      return `ps-init`;
    default:
      return `ps-rel`;
  }
};

export const renderDimension = (scale: ScreenScale) => {
  switch (scale) {
    case ScreenScale.Quarter:
      return `25%`;
    case ScreenScale.Half:
      return `50%`;
    case ScreenScale.HalfAndQuarter:
      return `75%`;
    case ScreenScale.Full:
      return `100%`;
    case ScreenScale.Initial:
      return `initial`;
    default:
      return `100%`;
  }
};

export const renderGridDivision = (division: GridDivision) => {
  switch (division) {
    case GridDivision.OneToOne:
      return `1fr 1fr`;
    case GridDivision.OneToTwo:
      return `1fr 2fr`;
    case GridDivision.OneToThree:
      return `1fr 3fr`;
    case GridDivision.ThreeToOne:
      return `3fr 1fr`;
    case GridDivision.TwoToOne:
      return `2fr 1fr`;
    default:
      return `1fr 1fr`;
  }
};

export const renderFontSize = (fontSize: FontSize) => {
  switch (fontSize) {
    case FontSize.Overline:
      return 10;
    case FontSize.Caption:
      return 12;
    case FontSize.Normal:
      return 16;
    case FontSize.SubTitle:
      return 20;
    case FontSize.Title:
      return 24;
    case FontSize.SubHeader:
      return 32;
    case FontSize.Header:
      return 48;
    case FontSize.LargeHeader:
      return 64;
    default:
      return 16;
  }
};

export const renderFontStyle = (fontStyle: FontStyle) => {
  switch (fontStyle) {
    case FontStyle.Normal:
      return `normal`;
    case FontStyle.Italic:
      return `italic`;
    default:
      return `normal`;
  }
};

export const renderFontWeight = (fontWeight: FontWeight) => {
  switch (fontWeight) {
    case FontWeight.Light:
      return `300`;
    case FontWeight.Regular:
      return `400`;
    case FontWeight.Medium:
      return `500`;
    case FontWeight.SemiBold:
      return `600`;
    case FontWeight.Bold:
      return `700`;
    case FontWeight.ExtraBold:
      return `800`;
    case FontWeight.Black:
      return `900`;
    default:
      return `400`;
  }
};

export const renderSpacingSize = (size: Size) => {
  switch (size) {
    case Size.None:
      return 0;
    case Size.XXSmall:
      return 4;
    case Size.XSmall:
      return 8;
    case Size.Small:
      return 12;
    case Size.Medium:
      return 16;
    case Size.Large:
      return 24;
    case Size.XLarge:
      return 32;
    case Size.XXLarge:
      return 64;
    default:
      return 0;
  }
};

export const renderHexColor = (color: string, percent?: number) => {
  const hexColorPercent = percent ? Math.floor(percent * 255).toString(16) : ``;
  return `${color}${hexColorPercent}`;
};
