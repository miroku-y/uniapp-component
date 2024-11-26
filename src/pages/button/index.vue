<!--
 * @Author: miroku.yang
 * @Date: 2024-07-31 20:21:04
 * @LastEditors: Please set LastEditors
 * @Description: 
-->
<template>
  <view class="component-content">
    <view class="component-title">Button</view>
    <view class="button-demo">
      <view class="code-box-description">
        <view>语法糖</view>
        <view
          >通过
          <code>type</code>
          语法糖，使用预设的按钮样式：主按钮、次按钮、虚线按钮、文本按钮和链接按钮。推荐主按钮在同一个操作区域最多出现一次。</view
        >
      </view>
      <view class="demo-wrap">
        <XtxButton type="primary">Primary Button</XtxButton>
      </view>
      <view class="demo-wrap">
        <XtxButton>Default Button</XtxButton>
      </view>
      <view class="demo-wrap">
        <XtxButton type="dashed">Dashed Button</XtxButton>
      </view>
      <view class="demo-wrap">
        <XtxButton type="text">Text Button</XtxButton>
      </view>
      <view class="demo-wrap">
        <XtxButton type="link">Link Button</XtxButton>
      </view>
      <br />
      <br />
      <view class="code-box-description">
        <view>block 按钮</view>
        <view><code>block</code> 属性将使按钮适合其父宽度。</view>
      </view>
      <view class="demo-wrap">
        <XtxButton type="primary" block>Primary Button</XtxButton>
      </view>
      <view class="demo-wrap">
        <XtxButton block>Default Button</XtxButton>
      </view>
      <view class="demo-wrap">
        <XtxButton type="dashed" block>Dashed Button</XtxButton>
      </view>
      <view class="demo-wrap">
        <XtxButton type="text" block>Text Button</XtxButton>
      </view>
      <view class="demo-wrap">
        <XtxButton type="link" block>Link Button</XtxButton>
      </view>
      <view class="code-box-description">
        <view>加载中状态</view>
        <view
          >通过
          <code>loading</code>
          属性即可让按钮处于加载状态，最后1个按钮演示点击后进入加载状态。</view
        >
      </view>
      <view class="demo-wrap">
        <XtxButton type="primary" loading>Primary Button</XtxButton>
      </view>
      <view class="demo-wrap">
        <XtxButton type="primary" loading>Default Button</XtxButton>
      </view>
      <view class="demo-wrap">
        <XtxButton type="primary" :loading="localLoading" @click="handleClick"
          >Click Button</XtxButton
        >
      </view>
    </view>
  </view>
</template>
<script setup lang="ts">
import { ref } from "vue";
// 动态设置loading
const localLoading = ref<boolean>(false);

const handleClick = () => {
  console.log(localLoading, "localLoading");
  localLoading.value = !localLoading.value;
  setTimeout(() => {
    localLoading.value = false;
  }, 6000);
};
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
