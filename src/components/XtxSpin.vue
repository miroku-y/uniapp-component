<!--
 * @Author: miroku.yang
 * @Date: 2024-08-06 16:39:59
 * @LastEditors: Please set LastEditors
 * @Description: 
-->
<template>
  <view class="uui-spin-wrap">
    <view v-if="base64" class="uui-spin">
      <view :class="[{ 'uui-spin-base64': base64 }]"> </view>
      <span class="uui-spin-text">
        <slot></slot>
      </span>
    </view>
    <view class="uui-spin" v-else>
      <view
        :class="[
          {
            'uui-spin-circle': mode == 'circle',
            'uui-spin-semicircle': mode == 'semicircle',
            'uui-spin-loading1': mode == 'loading1',
            'uui-spin-loading2': mode == 'loading2',
            'uui-spin-loading3': mode == 'loading3',
            'uui-spin-loading4': mode == 'loading4',
          },
        ]"
      >
        {{ mode == 'loading1'?'Loading':null }}
        {{ mode == 'loading2'?'Load ng':null }}
      </view>
      <span class="uui-spin-text">
        <slot></slot>
      </span>
    </view>
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
