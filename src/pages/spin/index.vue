<!--
 * @Author: miroku.yang
 * @Date: 2024-07-31 20:21:04
 * @LastEditors: Please set LastEditors
 * @Description: 
-->
<template>
    <view class="component-content">
        <view class="component-title">Spin</view>
        <view class="button-demo">
            <view class="code-box-description">
                <view><code>base64 </code> 语法糖</view>
                <view>base64 将svg 转成base64 ,然后以图片的形式进行加载，可以兼容微信小程序上无法直接使用svg的问题。</view>
            </view>
            <view class="block">
                <XtxSpin base64>base64 Loading</XtxSpin>
            </view>
            <br/>
            <br/>
            <view class="code-box-description">
                <view><code>mode </code> 语法糖</view>
                <view>mode设置加载图标的模式，默认为circle4/1 圆环，可选值flower花朵加载、semicircle带第 4/1 圆环(底部有整圆形轨道).</view>
            </view>
            <view class="block">
                <XtxSpin>circle Loading</XtxSpin>
            </view>
            <view class="block">
                <XtxSpin mode="semicircle">semicircle Loading</XtxSpin>
            </view>
        </view>
    </view>
</template>
<style lang="scss" scoped>
@import "./index.scss";
</style>