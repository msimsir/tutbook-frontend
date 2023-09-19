import type { Size } from '@/types';
import { renderSpacingSize } from '@/utils';
import { computed } from 'vue';

const useMargin = (
  marginBottom?: Size,
  marginLeft?: Size,
  marginRight?: Size,
  marginTop?: Size
) => {
  const margin = computed(() => ({
    mB: marginBottom ? renderSpacingSize(marginBottom) + `px` : `0px`,
    mL: marginLeft ? renderSpacingSize(marginLeft) + `px` : `0px`,
    mR: marginRight ? renderSpacingSize(marginRight) + `px` : `0px`,
    mT: marginTop ? renderSpacingSize(marginTop) + `px` : `0px`
  }));

  return margin;
};

export default useMargin;
