<script setup>
// import { useMyStore } from "../stores/pinia.js";
// useMyStore().increment();

import { ref } from "vue";
const voteList = ref([
  {
    groupimg: "src/assets/images/Party_emblem/g_progressiveparty.png",
    Presidentimg: "src/assets/images/President/english_chil.jpg",
    President: "蔡英文",
    wikipediaLink: "https://zh.wikipedia.org/zh-tw/%E8%94%A1%E8%8B%B1%E6%96%87",
  },
  {
    groupimg: "src/assets/images/Party_emblem/g_progressiveparty.png",
    group: "民主進步黨",
    Presidentimg: "src/assets/images/President/long_ting.jpg",
    President: "謝長廷",
    wikipediaLink: "https://zh.wikipedia.org/zh-tw/%E8%AC%9D%E9%95%B7%E5%BB%B7",
  },

  {
    groupimg: "src/assets/images/Party_emblem/or_peoplefirstarty.png",
    group: "親民黨",
    Presidentimg: "src/assets/images/President/fish_chu.jpg",
    President: "宋楚瑜",
    wikipediaLink: "https://zh.wikipedia.org/zh-tw/%E5%AE%8B%E6%A5%9A%E7%91%9C",
  },

  {
    groupimg: "src/assets/images/Party_emblem/b_chinesenationalistparty.png",
    group: "中國國民黨",
    Presidentimg: "src/assets/images/President/horse_nine.jpg",
    President: "馬英九",
    wikipediaLink: "https://zh.wikipedia.org/wiki/%E9%A6%AC%E8%8B%B1%E4%B9%9D",
  },

  {
    groupimg: "src/assets/images/Party_emblem/b_chinesenationalistparty.png",
    group: "中國國民黨",
    Presidentimg: "src/assets/images/President/pig_loun.jpg",
    President: "朱立倫",
    wikipediaLink: "https://zh.wikipedia.org/wiki/%E9%A6%AC%E8%8B%B1%E4%B9%9D",
  },

  {
    groupimg: "src/assets/images/Party_emblem/b_chinesenationalistparty.png",
    group: "中國國民黨",
    Presidentimg: "src/assets/images/President/korea_fissh.jpg",
    President: "韓國瑜",
    wikipediaLink: "https://zh.wikipedia.org/wiki/%E9%9F%93%E5%9C%8B%E7%91%9C",
  },
]);
</script>

<template>
  <div class="enter_container">

    <div class="enter_title">
      <img src="../assets/images/logo/circle_bear_logo.png" alt="circle_bear_logo" />
      <h2>台灣歷屆總統選舉 即時開票地圖</h2>
    </div>
    <p>2008 ~ 2020</p>

    <div class="card_container">
      <img src="../assets/images/Party_emblem/group_b_g_o.png" alt="group_b_g_o" />

      <div class="card_wrap" v-for="(i, index) in voteList">
        <a :href="i.wikipediaLink" target="_blank" rel="noopener noreferrer">
          <div class="card_title" :class="`bgcolor_${index}`">
            <img :src="i.groupimg" alt="groupimg" />

            <p>{{ i.group }}</p>
          </div>
          <img :src="i.Presidentimg" alt="Presidentimg" />

          <div class="card_name label_body">{{ i.President }}</div>

          <span class="card_footer" :class="`bgcolor_${index}`">1</span>
        </a>
      </div>
    </div>

    <router-link to="/2020_vote">
      <button class="button_check h1" @click="">查看</button>
    </router-link>

    <img src="../assets/images/design_material/finger-removebg-preview.png
  
    " alt="" />



 
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Koulen&family=Noto+Sans+TC:wght@100;300;800;900&family=Rampart+One&display=swap");

@import "@/assets/scss/base/color.scss";
@import "@/assets/scss/base/font.scss";

* {
  outline: 1px solid#DFF1FF;

  a {
    text-decoration: none;
  }
}

.enter_container{

  background-image: url(../assets/images/design_material/homepage_enter_background.png);
  background-size: cover; /* 覆蓋整個視窗 */
  background-position: center; /* 圖片在視窗中央對齊 */
  background-repeat: no-repeat; /* 避免重複顯示 */

  display: flex;
  flex-direction: column;
  justify-content: center;
}

h2 {
  color: $gray_font_color;
}
.enter_title {
  display: flex;
}
p {
  font-family: "Rampart One";
}
.card_container {
  display: flex;
  justify-content: center;
  gap: 51px;

  .card_wrap {
    display: flex;
    flex-direction: column;
    width: 140px;
    height: 198px;

    .card_title {
      width: 140px;
      height: 36px;
      border-radius: 12px 12px 0px 0px;
      // background: #80cd80;
      box-shadow: 0px -3px 17px 0px rgba(0, 0, 0, 0.25) inset;

      P {
        color: #117772;
        font-family: "Noto Sans TC";
        font-size: 10px;
      }
      img {
        width: 25px;
        height: 26.691px;
      }
    }
    .card_name {
      width: 140px;
      height: 34px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fafbff;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
    }
    .card_footer {
      border-radius: 0px 0px 11px 11px;
      box-shadow: 0px -3px 17px 0px rgba(0, 0, 0, 0.25) inset;
    }
  }
}

.bgcolor_0 {
  background-color: map-get($second_color, second_color2);
}
.bgcolor_1 {
  background-color: map-get($second_color, second_color2);
}
.bgcolor_2 {
  background-color: map-get($second_color, second_color3);
}
.bgcolor_3 {
  background-color: map-get($second_color, second_color1);
}
.bgcolor_4 {
  background-color: map-get($second_color, second_color1);
}
.bgcolor_5 {
  background-color: map-get($second_color, second_color1);
}

/* @mixin mobile{
  @media (max-width: 768px;) {

  }
}
@include mobile {

  } */
</style>
