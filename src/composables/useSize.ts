import type { Size } from '@/types';
import { renderSpacingSize } from '@/utils';
import { computed } from 'vue';

const useSize = (value?: Size) => {
  const size = computed(() => (value ? renderSpacingSize(value) + `px` : `0px`));

  return size;
};

export default useSize;
