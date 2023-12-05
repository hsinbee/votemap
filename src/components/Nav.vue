<script setup>
import { ref } from "vue";

const navlist = ref([
  { year: 2020, number: 15 },
  { year: 2016, number: 14 },
  { year: 2012, number: 13 },
  { year: 2008, number: 12 },
]);

const selectNavItem = ref(null);

// const bearappear =(index)=>{
//   for(let i=0;i<bear_pic.value.length;i++){
//     bear_pic.value[i].style.display ="none"
//   }
//   bear_pic.value[index].style.display ="block"
//   console.log( bear_pic.value[0].style.display)
// }
// const bear_pic = ref(null)
</script>

<template>
  <div class="nav_container">
    <div class="nav_wrap">
      <ol>
        <li
          v-for="(i, index) in navlist"
          :key="index"
          :class="{ selected: selectNavItem === index }"
        >
          <router-link
            class="nav_link_top"
            :to="`/${i.year}_vote`"
            @click="selectNavItem = index"
            >{{ i.year }} 年</router-link
          >
          <router-link
            class="nav_link_bottom"
            :to="`/${i.year}_vote`"
            @click="selectNavItem = index"
            >第{{ i.number }}任總統選舉</router-link
          >

          <img
            v-if="$route.path.indexOf(i.year)!= -1"
            src="../assets/images/logo/nav_bear_logo.png"
            alt="nav_bear"
          />
        </li>
      </ol>

      <img src="../assets/images/design_material/vote_line.png" alt="vote_line" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/base/color.scss";
@import "@/assets/scss/base/font.scss";

* {
  .nav_container {
    // border: 3px solid#b11e1e;

    width: 368px;
    height: 100%;
    display: flex;
    justify-content: center;
    background-color: rgb(255, 255, 255);
    border-radius: 29px;
    box-shadow: 0px -3px 17px 0px rgba(0, 0, 0, 0.25);

    .nav_wrap {
      // border: 3px solid#140707;

      display: flex;

      align-items: flex-start;

      > img {
        // border: 6px solid#b1650f;

        height: 260px;
        padding-top: 30px;
      }

      ol {
        // border: 6px solid#0f35b1;

        padding: 0;
        list-style-type: none;
        text-decoration: none;

        color: map-get($accent_color, accent_color2);
      }

      li {
        // border: 5px solid#0aa521;

        text-decoration: none;
      }

      .selected {
        background-color: $web_background;
    
      }
    }
  }
}
</style>