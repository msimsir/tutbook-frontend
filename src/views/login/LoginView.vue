<script setup lang="ts">
import ContainerBox from '@/components/layout/grid/ContainerBox.vue';
import { Display, FlexDirection, ScreenScale, Size } from '@/types';
</script>
<template>
  <ContainerBox
    :display="Display.Flex"
    :flex-direction="FlexDirection.Row"
    :width="ScreenScale.Half"
    :margin-bottom="Size.Medium"
    :margin-top="Size.Large"
  >
    <h1>This is Login View</h1>
  </ContainerBox>
</template>

<style scoped></style>
