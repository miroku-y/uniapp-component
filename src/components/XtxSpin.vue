<!--
 * @Author: miroku.yang
 * @Date: 2024-08-06 16:39:59
 * @LastEditors: Please set LastEditors
 * @Description: 
-->
<template>
  <view class="uui-spin-wrap">
    <svg class="circular" viewBox="0 0 50 50">
      <circle class="path" cx="25" cy="25" r="20" fill="none"></circle>
    </svg>
    <span class="uui-spin-text">
      <slot></slot>
    </span>
  </view>
</template>

<script lang="ts" setup>

// 生效
const props = withDefaults(defineProps<{
  tip: any;
}>(), {
});
</script>

<style lang="scss">
@import "./styles/spin.scss";
</style>
