/*
 * @Author: miroku.yang
 * @Date: 2024-06-28 15:07:09
 * @LastEditors: Please set LastEditors
 * @Description: 
 */
import { createSSRApp } from "vue";
import App from "./App.vue";

export function createApp() {
  // 创建 vue 实例
  const app = createSSRApp(App);

  // 使用pinia 实例
  return {
    app,
  };
}
