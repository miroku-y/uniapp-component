<!--
 * @Author: miroku.yang
 * @Date: 2024-06-28 15:07:09
 * @LastEditors: Please set LastEditors
 * @Description: 
-->
<template>
  <view class="index-page">
    <view class="header">
      <view class="title-wrap">
        <image class="logo" src="/static/logo.png" />
        <view class="text-area">
          <text class="title">{{ title }}</text>
        </view>
      </view>
      <view class="descript">学习uni-app 小程序组件开发</view>
    </view>
    <!-- 基础组件 -->
    <view class="section">
      <view v-for="item in list" :key="item.id">
        <text class="base-title">{{ item.title }}</text>
        <view class="components">
          <navigator
            :url="`/pages/${subitem.pathName}/index`"
            v-for="subitem in item.components"
            :key="subitem.id"
            class="component-item"
          >
            <text class="component-name">{{ subitem.name }}</text>
            <text class="more">></text>
          </navigator>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";

const title = ref("Uni-App-Components");
const list = ref([
  {
    title: "基础组件",
    id: "1",
    components: [{ name: "Button 按钮", id: "101", pathName: "button" },{ name: "Spin 加载", id: "102", pathName: "spin" }],
  },
]);
</script>

<style lang="scss">
@import "./index.scss";
</style>
