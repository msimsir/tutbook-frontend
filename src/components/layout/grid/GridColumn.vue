<script setup lang="ts">
import useDimensions from '@/composables/useDimensions';
import useGridDivision from '@/composables/useGridDivision';
import useMargin from '@/composables/useMargin';
import usePadding from '@/composables/usePadding';
import useSize from '@/composables/useSize';
import {
  Justify,
  Align,
   GridDivision,
  type IMarginStyles,
  type IPaddingStyles,
   Size,
  type IDimensionStyles
} from '@/types';
import { renderAlignItemsClass, renderJustifyContentClass } from '@/utils';
import { computed } from 'vue';

interface IGridRowProps extends IPaddingStyles, IMarginStyles, IDimensionStyles {
  className?: string;
  columnType?: GridDivision;
  align?: Align;
  justify?: Justify;
  gap?: Size;
}
const props = defineProps<IGridRowProps>();
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
const gridGap = useSize(props.gap);
const columnDivision = useGridDivision(props.columnType);

const classes = computed(() => ({
  align: props.align ? renderAlignItemsClass(props.align) : `ai-flstart`,
  justify: props.justify ? renderJustifyContentClass(props.justify) : `jc-start`
}));
</script>
<template>
  <div
    :class="[props.className ?? props.className, classes.align, classes.justify]"
    class="grid-column"
  ></div>
</template>

<style lang="scss" scoped>
@use '../../../assets/mixins';
.grid-column {
  display: grid;
  @include mixins.render-css-value('column-gap', v-bind('gridGap'));
  @include mixins.render-css-value('grid-template-rows', v-bind('columnDivision'));
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
}
</style>
