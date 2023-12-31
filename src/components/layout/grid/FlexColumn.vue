<script setup lang="ts">
import useDimensions from '@/composables/useDimensions';
import useMargin from '@/composables/useMargin';
import usePadding from '@/composables/usePadding';
import useSize from '@/composables/useSize';
import {
  Align,
  Justify,
  FlexWrap,
  LayoutPosition,
  type IMarginStyles,
  type IDimensionStyles,
  type IPaddingStyles,
  type ITransitionStyle,
  Size
} from '@/types';
import {
  renderAlignItemsClass,
  renderFlexWrapClass,
  renderJustifyContentClass,
  renderLayoutPositionClass
} from '@/utils';
import { computed } from 'vue';

interface IFlexColumnProp extends IPaddingStyles, IMarginStyles, IDimensionStyles {
  align?: Align;
  justify?: Justify;
  wrap?: FlexWrap;
  gap?: Size;
  layoutPosition?: LayoutPosition;
  transition?: ITransitionStyle;
}

const props = defineProps<IFlexColumnProp>();

const dimension = useDimensions(
  props.width,
  props.percentWidth,
  props.absoluteWidth,
  props.height,
  props.percentHeight,
  props.absoluteHeight
);
const margin = useMargin(props.marginBottom, props.marginLeft, props.marginRight, props.marginTop);
const padding = usePadding(
  props.paddingBottom,
  props.paddingLeft,
  props.paddingRight,
  props.paddingTop
);
const flexGap = useSize(props.gap);

const classes = computed(() => ({
  align: props.align ? renderAlignItemsClass(props.align) : `fl-start`,
  justify: props.justify ? renderJustifyContentClass(props.justify) : `fl-start`,
  position: props.layoutPosition ? renderLayoutPositionClass(props.layoutPosition) : `ps-rel`,
  wrap: props.wrap ? renderFlexWrapClass(props.wrap) : `fl-wrap`
}));
</script>
<template>
  <div
    :class="[classes.align, classes.justify, classes.position, classes.wrap]"
    class="flex-column"
  >
    flexbox
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@use '../../../assets/mixins';
.flex-column {
  display: flex;
  flex-direction: column;
  @include mixins.render-dimension(v-bind('dimension.width'), true);
  @include mixins.render-dimension(v-bind('dimension.height'), false);
  @include mixins.render-margin(
    v-bind('margin.mB'),
    v-bind('margin.mL'),
    v-bind('margin.mR'),
    v-bind('margin.mT')
  );
  @include mixins.render-padding(
    v-bind('padding.pB'),
    v-bind('padding.pL'),
    v-bind('padding.pR'),
    v-bind('padding.pT')
  );
  @include mixins.render-css-value('gap', v-bind('flexGap'));
  @include mixins.render-css-value('transition-property', v-bind('transition?.transitionProperty'));
  @include mixins.render-css-value('transition-duration', v-bind('transition?.transitionDuration'));
  @include mixins.render-css-value(
    'transition-timing-fuction',
    v-bind('transition?.transitionFunction')
  );
}
</style>
