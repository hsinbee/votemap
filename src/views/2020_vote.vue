<script setup>
import { ref } from "vue";
import Map from "../components/Map2020.vue";
import Nav from "../components/Nav.vue";

const voteList = ref([
  {
    groupimg: "src/assets/images/Party_emblem/g_progressiveparty.png",
    group: "民主進步黨",
    Presidentimg: "src/assets/images/President/english_chil.jpg",
    President: "蔡英文",
    wikipediaLink: "https://zh.wikipedia.org/zh-tw/%E8%94%A1%E8%8B%B1%E6%96%87",
    getVotes: "57.13%",
    getVotesnumber: "8,170,231  票",
  },

  {
    groupimg: "src/assets/images/Party_emblem/b_chinesenationalistparty.png",
    group: "中國國民黨",
    Presidentimg: "src/assets/images/President/korea_fissh.jpg",
    President: "韓國瑜",
    wikipediaLink: "https://zh.wikipedia.org/wiki/%E9%9F%93%E5%9C%8B%E7%91%9C",
    getVotes: "38.61%",
    getVotesnumber: "5,522,119  票",
  },
  {
    groupimg: "src/assets/images/Party_emblem/or_peoplefirstarty.png",
    group: "親民黨",
    Presidentimg: "src/assets/images/President/fish_chu.jpg",
    President: "宋楚瑜",
    wikipediaLink: "https://zh.wikipedia.org/zh-tw/%E5%AE%8B%E6%A5%9A%E7%91%9C",
    getVotes: "4.26%",
    getVotesnumber: "608,590  票",
  },
]);
</script>

<template>
  <div class="web_container">
    <div class="web_map_container">
      <div class="web_wrap">
        <div class="title_wrap">
          <div class="title">
            <router-link to="/">
              <img src="../assets/images/logo/main_logo.png" alt="main_logo"
            /></router-link>
            <h3>2020年</h3>
            <h3>第 15 屆總統開票地圖</h3>
          </div>

          <div class="card_container">
            <div class="card_wrap" v-for="(i, index) in voteList">
              <a :href="i.wikipediaLink" target="_blank" rel="noopener noreferrer">

                <div class="card_title" :class="`bgcolor_${index}`">
                  <img :src="i.groupimg" alt="groupimg" />

                  <p class="label_body">{{ i.group }}</p>
                </div>


                <img :src="i.Presidentimg" alt="Presidentimg" />

                <div class="card_name label_body">{{ i.President }}</div>

                <span class="card_footer label_footer" :class="`bgcolor_${index}`">{{
                  i.getVotes
                }}</span>
              </a>
            </div>
          </div>
        </div>

        <div class="coordinate_wrap">
          <img src="../assets/images/Party_emblem/bottom_icon_2020_2016.png" alt="coordinate" />
          <ol>
            <li class="label_body" v-for="(i, index) in voteList">
              {{ i.getVotesnumber }}
            </li>
          </ol>
        </div>
      </div>

      <Map /> <Nav />
    </div>
  </div>
</template>

<style lang="scss" scoped>


@import "@/assets/scss/base/color.scss";
@import "@/assets/scss/base/font.scss";

* {
  // outline: 2px solid#903333;
  a {
    text-decoration: none;
  }

  .web_container {
    border: 50px solid $web_background;
    background-color: $web_background;

    .web_map_container {
      display: flex;
      gap: 40 0px;
      background-color: map-get($accent_color, accent_color2);
      border-radius: 20px;
      padding: 150px;
      .web_wrap {
        h3 {
          color: #ffffff;
        }

        .card_container {
          display: flex;
          gap: 37px;

          .card_wrap {
            .card_title {
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 5px;
              border-radius: 12px 12px 0px 0px;
              box-shadow: 0px -3px 17px 0px rgba(0, 0, 0, 0.25) inset;

              P {
                color: #ffffff;
    
              }
              img {
                width: 25px;
              }
            }
            .card_name {
              width: 140px;
              height: 34px;
              display: flex;
              justify-content: center;
              align-items: center;
              color: #000000;
              background: #fafbff;
              box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
            }
            .card_footer {
              display: flex;
              justify-content: center;
              align-items: center;
             
              border-radius: 0px 0px 11px 11px;
              color: #ffffff;
              font-size: $h4;
              box-shadow: 0px -3px 17px 0px rgba(0, 0, 0, 0.25) inset;
            }
          }
        }
      }
    }
  }
  .coordinate_wrap {
    display: flex;
    padding-top: 50px;

    ol {
      list-style: none;

      li {
       text-align: end;
        margin-bottom: 30px;
        color: #ffffff;
      }
    }
  }
}

.bgcolor_0 {
  background-color: map-get( $primary_color,  primary_color2);
}
.bgcolor_1 {
  background-color: map-get( $primary_color,  primary_color1);
}
.bgcolor_2 {
  background-color: map-get( $primary_color, primary_color5);
}
</style>
