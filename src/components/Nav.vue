<script setup>
import { ref } from "vue";

const navlist = ref([
  { year: 2020, number: 15 },
  { year: 2016, number: 14 },
  { year: 2012, number: 13 },
]);




</script>

<template>
  <div class="nav_container">
    <div class="nav_wrap">
      <ol>
        <li v-for="(i, index) in navlist" :key="index">
          <router-link class="nav-link" :to="`/${i.year}_vote`"
            >{{ i.year }} 年 第{{ i.number }}任總統選舉</router-link
          >
          <img src="@/assets/images/design_material/vote_circle.png" alt="vote_circle" />

          <img v-if="selectNavItem === index" src="../assets/images/logo/nav_bear_logo.png" alt="nav_bear" />

        </li>
      </ol>

      <img src="../assets/images/design_material/vote_line.png" alt="vote_line" />
    </div>
  </div>
</template>

<style lang="scss" scoped>


@import "@/assets/scss/base/color.scss";
@import "@/assets/scss/base/font.scss";

.nav_container {
  width: 368px;
  height: 320px;
  background-color: rgb(255, 255, 255);
  border-radius: 29px;
  box-shadow: 0px -3px 17px 0px rgba(0, 0, 0, 0.25);

  .nav_wrap {
    display: flex;
    ol {
      list-style-type: none;
      padding: 0;
      text-decoration: none;
      color: map-get($accent_color, accent_color2);
    }

    li {
      padding: 36px;
      text-decoration: none;

      li img {
        margin: 130px;
      }
    }
  }
}
</style>
