<script setup lang="ts">
import IconTutBook from '@/components/icons/IconTutBook.vue';
import FlexRow from '@/components/layout/grid/FlexRow.vue';
import ParagraphText from '@/components/typography/ParagraphText.vue';
import { colors } from '@/constants/colors';
import {
  Align,
  type ISignInUser,
  type ISignUpUser,
  ParagraphType,
  Size,
  FontWeight
} from '@/types';

interface IFormBoxProps {
  isLoginForm?: boolean;
  loginForm?: ISignInUser;
  registerForm?: ISignUpUser;
}

const props = defineProps<IFormBoxProps>();
</script>
<template>
  <div class="form-box">
    <FlexRow
      :align="Align.Center"
      :gap="Size.Medium"
      :absolute-height="36"
      :is-initial-width="true"
    >
      <ParagraphText :type="ParagraphType.Title" :font-weight="FontWeight.Bold">{{
        $t('login.welcome')
      }}</ParagraphText>
      <IconTutBook :width="19" :height="21" :color="colors.base" />
    </FlexRow>

    <FlexRow>
      <FlexRow></FlexRow>
      <FlexRow></FlexRow>
    </FlexRow>
  </div>
</template>

<style scoped lang="scss">
@use '../../../assets/variables';

.form-box {
  height: 360px;
  width: 440px;
  border-radius: 6px;
  background: rgba(variables.$white-color, 0.9);
  padding: 44px 62px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
