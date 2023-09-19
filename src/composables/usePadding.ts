import type { Size } from '@/types';
import { renderSpacingSize } from '@/utils';
import { computed } from 'vue';

const usePadding = (
  paddingBottom?: Size,
  paddingLeft?: Size,
  paddingRight?: Size,
  paddingTop?: Size
) => {
  const padding = computed(() => ({
    pB: paddingBottom ? renderSpacingSize(paddingBottom) + `px` : `0px`,
    pL: paddingLeft ? renderSpacingSize(paddingLeft) + `px` : `0px`,
    pR: paddingRight ? renderSpacingSize(paddingRight) + `px` : `0px`,
    pT: paddingTop ? renderSpacingSize(paddingTop) + `px` : `0px`
  }));

  return padding;
};

export default usePadding;
