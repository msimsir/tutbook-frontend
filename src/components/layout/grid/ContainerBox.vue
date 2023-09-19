<script setup lang="ts">
import useDimensions from '@/composables/useDimensions';
import useMargin from '@/composables/useMargin';
import usePadding from '@/composables/usePadding';
import useSize from '@/composables/useSize';
import {
  Display,
  type Align,
  type FlexDirection,
  type IDimensionStyles,
  type IMarginStyles,
  type IPaddingStyles,
  type LayoutPosition,
  type Size,
  Justify
} from '@/types';
import {
  renderAlignItemsClass,
  renderDisplayClass,
  renderFlexDirectionClass,
  renderJustifyContentClass,
  renderLayoutPositionClass
} from '@/utils';
import { computed } from 'vue';

interface IContainerBoxProps extends IPaddingStyles, IMarginStyles, IDimensionStyles {
  display?: Display;
  flexDirection?: FlexDirection;
  layoutPosition?: LayoutPosition;
  align?: Align;
  justify?: Justify;
  gap?: Size;
}

const props = withDefaults(defineProps<IContainerBoxProps>(), {
  display: Display.Block
});

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
  display: props.display ? renderDisplayClass(props.display) : `ct-block`,
  direction: props.flexDirection ? renderFlexDirectionClass(props.flexDirection) : `fl-row`,
  align: props.align ? renderAlignItemsClass(props.align) : `fl-start`,
  justify: props.justify ? renderJustifyContentClass(props.justify) : `fl-start`,
  position: props.layoutPosition ? renderLayoutPositionClass(props.layoutPosition) : `ps-rel`
}));
</script>
<template>
  <div
    :class="[classes.display, classes.direction, classes.align, classes.justify, classes.position]"
    class="ct-box"
  >
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@use '../../../assets/mixins';

.ct-box {
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
}
</style>
