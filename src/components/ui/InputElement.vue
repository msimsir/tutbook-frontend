<script setup lang="ts">
import { Variant, type ScreenScale } from '@/types';
import FlexColumn from '../layout/grid/FlexColumn.vue';
import type { Slot } from 'vue';

interface IInputElementProps {
  className?: string;
  variant?: Variant;
  placeholder?: string;
  autoComplete?: string;
  disabled?: boolean;
  name: string;
  value: string;
  type?: string;
  icon?: Slot;
  width?: ScreenScale;
  label?: string;
  alertTitle?: string;
  alertInfo?: string;
  alerted?: boolean;
}

const props = withDefaults(defineProps<IInputElementProps>(), {
  variant: Variant.Primary
});
</script>

<template>
  <FlexColumn :class="[props.className ?? props.className]">
    <label v-if="props.label ?? false">{{ $t('props.label') }}</label>
    <div class="input-container">
      <icon />
      <input :placeholder="props.placeholder" :autoComplete="props.autoComplete" />
    </div>
  </FlexColumn>
</template>

<style scoped></style>
