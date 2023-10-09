<script setup lang="ts">
import useDimensions from '@/composables/useDimensions';
import useGridDivision from '@/composables/useGridDivision';
import useMargin from '@/composables/useMargin';
import usePadding from '@/composables/usePadding';
import useSize from '@/composables/useSize';
import type {
  Align,
  GridDivision,
  IDimensionStyles,
  IMarginStyles,
  IPaddingStyles,
  Size
} from '@/types';
import { renderAlignItemsClass } from '@/utils';
import { computed } from 'vue';

interface IGridRowProps extends IPaddingStyles, IMarginStyles, IDimensionStyles {
  className?: string;
  rowType?: GridDivision;
  align?: Align;
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
const rowDivision = useGridDivision(props.rowType);

const classes = computed(() => ({
  align: props.align ? renderAlignItemsClass(props.align) : `ai-flstart`
}));
</script>
<template>
  <div :class="[props.className ?? props.className, classes.align]" class="grid-row"></div>
</template>

<style lang="scss" scoped>
@use '../../../assets/mixins';
.grid-row {
  display: grid;
  @include mixins.render-css-value('row-gap', v-bind('gridGap'));
  @include mixins.render-css-value('grid-template-columns', v-bind('rowDivision'));
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
