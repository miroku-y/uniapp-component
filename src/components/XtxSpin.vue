<!--
 * @Author: miroku.yang
 * @Date: 2024-08-06 16:39:59
 * @LastEditors: Please set LastEditors
 * @Description: 
-->
<template>
  <view class="uui-spin-wrap">
    <view v-if="base64">
      <view :class="[{ 'uui-spin-base64': base64 }]"> </view>
    </view>
    <view class="uui-spin" v-else-if="mode == 'circle'">
      <view :class="[{ 'uui-spin-circle': mode == 'circle' }]">
      </view>
    </view>
    <view class="uui-spin-semicircle" v-else-if="mode == 'semicircle'">
      <view class="uui-spin-semicircle-loading">
      </view>
      <view class="uui-spin-semicircle-animation">
      </view>
    </view>
    <span class="uui-spin-text">
      <slot></slot>
    </span>
  </view>
</template>

<script lang="ts" setup>
// 生效
const props = withDefaults(
  defineProps<{
    tip: any;
    base64: boolean;
    mode: string;
  }>(),
  {
    base64: false,
    mode: "circle",
  },
);
</script>

<style lang="scss">
@import "./styles/spin.scss";
</style>
