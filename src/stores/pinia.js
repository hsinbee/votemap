// src/store/myStore.js

import { defineStore } from 'pinia';

// 定義一個名為 'myStore' 的 store
export const useMyStore = defineStore('myStore', {
  // 狀態資料
  state: () => ({
    count: 10,
    // 其他狀態...
    String:'哈哈',
    
  }),

  // 獲取狀態的 getters
  getters: {
    doubleCount() {
      return this.count * 2;
    },
    // 其他 getters...
  },

  // 修改狀態的 mutations
  actions: {
    increment() {
      this.count++;
    },
    // 其他 actions...
  },
})

// 在需要的地方引入並使用 useMyStore
// import { useMyStore } from '@/store/myStore';
// const myStore = useMyStore();
