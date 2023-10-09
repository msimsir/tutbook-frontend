<script setup lang="ts">
import ContainerBox from '@/components/layout/grid/ContainerBox.vue';
import FlexRow from '@/components/layout/grid/FlexRow.vue';
import HeaderText from '@/components/typography/HeaderText.vue';
import { colors } from '@/constants/colors';
import { Display, FlexDirection, HeaderType, LayoutPosition } from '@/types';
import FormBox from './form/FormBox.vue';
</script>
<template>
  <ContainerBox
    :display="Display.Flex"
    :flex-direction="FlexDirection.Row"
    :background-color="colors.lightGray"
    :layout-position="LayoutPosition.Relative"
  >
    <FlexRow
      :layout-position="LayoutPosition.Absolute"
      :absolute-height="64"
      :absolute-width="120"
      class="text"
    >
      <HeaderText :type="HeaderType.Header"> {{ $t('login.register') }} </HeaderText>
    </FlexRow>

    <img src="../../assets/images/login-page-bg.png" class="background-color-img" />
    <img src="../../assets/images/login-page-banner.png" class="banner-img" />
    <FormBox class="form-container" />
  </ContainerBox>
</template>

<style scoped lang="scss">
.background-color-img {
  width: 100%;
  object-fit: fill;
  position: relative;
  height: 100%;
}
.banner-img {
  position: absolute;
  left: 25%;
  width: 30%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 6px;
}
.text {
  top: 64px;
  left: 80px;
  position: absolute;
  width: 160px;
  height: 80px;
}
.form-container {
  position: absolute;
  right: 25%;
  top: 50%;
  transform: translate(50%, -50%);
}
</style>
