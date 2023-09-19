import type { ScreenScale } from '@/types';
import { renderDimension } from '@/utils';
import { computed } from 'vue';

const useDimensions = (
  width?: ScreenScale,
  percentWidth?: number,
  absoluteWidth?: number,
  height?: ScreenScale,
  percentHeight?: number,
  absoluteHeight?: number
) => {
  const dimension = computed(() => ({
    width: absoluteWidth
      ? absoluteWidth + `px`
      : percentWidth
      ? percentWidth + `%`
      : width
      ? renderDimension(width)
      : `100%`,
    height: absoluteHeight
      ? absoluteHeight + `px`
      : percentHeight
      ? percentHeight + `%`
      : height
      ? renderDimension(height)
      : `100%`
  }));

  return dimension;
};

export default useDimensions;
