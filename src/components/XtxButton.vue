<!--
 * @Author: miroku.yang
 * @Date: 2024-08-06 16:39:59
 * @LastEditors: Please set LastEditors
 * @Description: 
-->
<template>
  <view class="uui-button-wrap">
    <Button class="uui-button" :class="[`uui-button--${type}`]">
      <span><slot></slot></span>
    </Button>
  </view>
</template>

<script lang="ts" setup>
// 定义 props 接收

// 这被称之为“运行时声明”，因为传递给 defineProps() 的参数会作为运行时的 props 选项使用。
// 通过普通的选项式写法，可以在定义props 类型的同时，设置默认值：
// const props = defineProps({
//   type:{
//     type:String,
//     default: 'default',
//     required: false // 是否必传
//   }
// })

// ts写法(3.4及以下版本)
// 就会报错 defineProps has both a type-only props and an argument. 如何解决这一问题呢?
// const props = defineProps<{
//   type?: string; // 是否必传
// }>(),
//   {
//     type: "default",
//   };

// ts写法(3.5版本) 不生效
// const { type = "default" } = defineProps<{
//   type: string;
// }>();

// ts写法(3.5版本) 不生效
const props = withDefaults(defineProps<{
  type: string;
}>(), {
  type: 'default'
});
</script>

<style lang="scss">
@import "./styles/button.scss";
</style>
