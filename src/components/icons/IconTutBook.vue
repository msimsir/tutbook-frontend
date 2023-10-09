<script setup lang="ts">
import { colors } from '@/constants/colors';

interface IIconTutBookProps {
  width?: number;
  height?: number;
  color?: string;
}

const props = withDefaults(defineProps<IIconTutBookProps>(), {
  width: 15,
  height: 17,
  color: colors.black
});
</script>

<template>
  <svg
    :width="props.width"
    :height="props.height"
    viewBox="0 0 15 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="4.73682" y="9.71423" width="4.73684" height="7.28571" :fill="props.color" />
    <rect y="6.4762" width="4.73684" height="7.28571" :fill="props.color" />
    <rect x="9.47363" y="6.4762" width="3.15789" height="7.28571" :fill="props.color" />
    <rect x="12.6316" y="3.23804" width="1.57895" height="7.28571" :fill="props.color" />
    <rect x="14.2106" width="0.789474" height="7.28571" :fill="props.color" />
  </svg>
</template>
