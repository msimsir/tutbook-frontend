<script setup lang="ts">
import { HeaderType, type IPaddingStyles, type ITextStyles } from '@/types';

interface IHeaderTextProps extends ITextStyles, IPaddingStyles {
  className?: string;
  type?: HeaderType;
}

const props = withDefaults(defineProps<IHeaderTextProps>(), {
  type: HeaderType.Header
});
</script>
<template>
  <h1
    class="header"
    :class="[props.className ?? props.className]"
    v-if="props.type === HeaderType.OverLargeHeader"
  >
    <slot />
  </h1>
  <h2
    class="header"
    :class="[props.className ?? props.className]"
    v-if="props.type === HeaderType.LargeHeader"
  >
    <slot />
  </h2>
  <h3
    class="header"
    :class="[props.className ?? props.className]"
    v-if="props.type === HeaderType.Header"
  >
    <slot />
  </h3>
  <h4
    class="header"
    :class="[props.className ?? props.className]"
    v-if="props.type === HeaderType.SubHeader"
  >
    <slot />
  </h4>
</template>

<style scoped lang="scss">
@use '../../assets/variables';

.header {
  color: variables.$black-color;
  line-height: 150%;
  height: 100%;
  width: 100%;
}
</style>
