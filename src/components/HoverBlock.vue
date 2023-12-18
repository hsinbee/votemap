<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

// import axiosJS from '../plugin/axios';

// import { publicPath } from '@/plugin/axios'
// import { GET } from '../utils/map2020.json';

const container = ref(null);
const svg = ref(null);
const response = ref(null);
const datalist = ref({});

const componentData = ref({
  container,
  svg,
  response,
});

onMounted(async () => {
  try {
    const result = await axios.get("/data/map2020.json");

    datalist.value = result.data.datas;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});

// for (let i = 1; i <= 19; i++) {
//   const path = componentData.svg.value.querySelector(`path:nth-child(${i})`);
//   const div = document.createElement("div");

//   div.style.position = "absolute";
//   div.style.zIndex = i;
//   div.style.display = "none";

//   const pathRect = path.getBoundingClientRect();
//   const svgRect = componentData.svg.value.getBoundingClientRect();

//   div.style.top = `${pathRect.top - svgRect.top + pathRect.height / 2}px`;
//   div.style.left = `${pathRect.left - svgRect.left + pathRect.width / 2}px`;

//   div.innerHTML = `
//       <p>ji3jidowijed</p>
//     `;

//   componentData.container.value.appendChild(div);

//   path.addEventListener("mouseover", () => {
//     div.style.display = "block";
//   });

//   path.addEventListener("mouseout", () => {
//     div.style.display = "none";
//   });
// }
</script>

<template>
  <!-- {{ datalist }} -->

  <div v-for="item in datalist.cityGroup" :key="item.id" class="hover_wrap">
    <div>

      <h1>{{ item.fieldCN }}</h1>

      <div class="hover_container">
        <div v-for="item2 in item.candidate" :key="item2.id" class="candidate">
          <!-- <img :src="candidate" alt="" /> -->
          <h2>{{ item2.president }}</h2>
          <div class="bar">
            <!-- <img :src="candidate.partyImage" alt="" /> -->
            <p>{{ item2.votes }} 票</p>
          </div>
          <p>{{ item2.voterTurnout }}%</p>
        </div>
      </div>
    </div>
    
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/base/color.scss";
@import "@/assets/scss/base/font.scss";

* {
}
.hover_wrap {
  padding: 0px 20px 20px 20px;
  border: 1px solid#000000;
  border-radius: 30px;
  background: linear-gradient(180deg, #d0eaff 0%, rgba(208, 234, 255, 0) 100%),
    var(--gray-colors-white, #fff);
  stroke-width: 1px;
  stroke: #000;
  filter: drop-shadow(0px 4px 4px #adbbff);
  display: inline-block;

  p {
    padding-left: 5px;
  }

  h2 {
    border: 1px solid#d44b4b;
    font-family: "Noto Sans TC";
    font-size: 18px;
    font-weight: 500;
  }
  h1 {
    border: 1px solid#d44b4b;
    font-family: "Noto Sans TC";
    font-weight: 500;
  }

  .hover_container {
    border: 1px solid#000000;
    display: inline-block;
    .candidate {
      border: 1px solid#19ad20;
      display: flex;
      align-items: center;
      .candidate > img {
        border: 1px solid#156cf0;

        width: 45px;
        height: 43px;
      }

      .bar {
        border: 1px solid#fd29e1;
      }

      .bar p {
        border: 1px solid#b3df13;
        margin: 0;
        color: #2d3648;
        text-align: right;
        font-family: "Noto Sans TC";
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
      }
    }
  }
}
</style>
