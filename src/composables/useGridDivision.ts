import type { GridDivision } from '@/types';
import { renderGridDivision } from '@/utils';
import { computed } from 'vue';

const useGridDivision = (division?: GridDivision) => {
  const gridDivision = computed(() => (division ? renderGridDivision(division) : `1fr 1fr`));

  return gridDivision;
};

export default useGridDivision;
