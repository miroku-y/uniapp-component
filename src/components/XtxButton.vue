<!--
 * @Author: miroku.yang
 * @Date: 2024-08-06 16:39:59
 * @LastEditors: Please set LastEditors
 * @Description: 
-->
<template>
    <view class="uui-button-wrap">
      <XtxButton class="uui-button" :class="[`uui-button--${type}`]"></XtxButton>
    </view>
  </template>
  
  <script lang="ts">
  // 定义 props 接收
  defineProps<{
    type: string;
  }>(),{
      type:'default'
  };
  </script>
  
  <style lang="scss">
    @import './styles/button.scss'
  </style>
  