<script setup lang="ts">
import { type IPaddingStyles, type ITextStyles, ParagraphType } from '@/types';

interface IParagraphTextProps extends ITextStyles, IPaddingStyles {
  className?: string;
  type?: ParagraphType;
  disabled?: boolean;
  isBorderBottom?: boolean;
}

const props = withDefaults(defineProps<IParagraphTextProps>(), {
  type: ParagraphType.Normal
});
</script>
<template>
  <p
    class="paragraph"
    :class="[
      props.className ?? props.className,
      props.disabled ?? 'disabled',
      props.isBorderBottom ?? 'border-bottom'
    ]"
  >
    <slot />
  </p>
</template>

<style scoped lang="scss">
@use '../../assets/variables';
.paragraph {
  color: variables.$black-color;
  line-height: 150%;
  font-size: v-bind('props.type');
  font-weight: v-bind('props.fontWeight');
}
.border-bottom {
  border: 1px solid rgba(variables.$black-color, 0.5);
}
.disabled {
  color: rgba(variables.$black-color, 0.5);
}
</style>
