<script setup>
// import { ref } from "vue";


</script>

<template>


  <div class="loading">
    <div class="loadingBear">
      <span><img src="./pic/bearsearch.png" alt="" /></span>
    </div>

    <span><img src="./pic/map-tw.png" alt="" /></span>

    <h1>選民的心聲，正在揭示民意..</h1>
  </div>


  
</template>

<style lang="scss" scoped>

@import url("https://fonts.googleapis.com/css2?family=Koulen&family=Noto+Sans+TC:wght@100&display=swap");

@font-face {
  font-family: "chenyuluoyan";
  src: url("./font/chenyuluoyan_thin-main/ChenYuluoyan-Thin-Monospaced.ttf")
    format("truetype");

}

body {

  background: #5590bf;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

body:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;

  /*三色 */

  /* background: radial-gradient(circle, rgb(248, 231, 159) ,rgb(199, 254, 163) , rgb(186, 220, 255));  */

  background: radial-gradient(
    circle,
    rgb(248, 231, 159),
    rgb(198, 230, 176),
    rgb(154, 195, 236)
  );

  /* background: radial-gradient(circle, rgb(248, 231, 159), rgb(198, 230, 176), rgb(194, 218, 241), rgb(206, 231, 255),rgb(255, 255, 255)); */

  /*二色 　藍綠　淺到淡　*/

  /* background: radial-gradient(rgb(194, 255, 153), rgb(57, 161, 241)); */
  /* background: radial-gradient(rgb(192, 254, 151), rgb(11, 112, 191)); */

  /*二色 　白色　橘色／藍色　　淺到淡　*/

  /*  background: radial-gradient(rgb(255, 167, 92), rgb(255, 255, 255)); */
  /*  background: radial-gradient(rgb(177, 216, 255), rgb(255, 255, 255)); */

  /*  background: radial-gradient(rgb(255, 255, 255), rgb(177, 216, 255));*/
  /*  background: radial-gradient(rgb(255, 255, 255), rgb(148, 202, 255)); */

  opacity: 0;
  animation: sky 5s infinite;
  -webkit-animation: sky 3s infinite;
  -moz-animation: sky 3s infinite;
}

.loadingBear span img {
  animation: circleMove 4s linear infinite;
}

@keyframes sky {
  80% {
    opacity: 1;
  }
}

@-webkit-keyframes sky

    /*Safari and Chrome*/ {
  50% {
    opacity: 1;
  }
}

@keyframes textColor {
  50% {
    color: #39678d;
  }
}

@-webkit-keyframes textColor

    /*Safari and Chrome*/ {
  50% {
    color: #39678d;
  }
}

@keyframes spin
    /*{ 50% {	transform: rotate(360deg); } }
@-webkit-keyframes spin Safari and Chrome
{ 50% { 		-webkit-transform:rotate(180deg); 	} }*/

    @-webkit-keyframes type {
  from {
    width: 0;
  }
}

@keyframes type {
  from {
    width: 0;
  }
}

@keyframes circleMove {
  0% {
    transform: translateX(-50px) translateY(0);
  }

  25% {
    transform: translateX(-100px) translateY(30);
  }

  50% {
    transform: translateX(200px) translateY(100px);
  }

  75% {
    transform: translateX(100px) translateY(30px);
  }

  100% {
    transform: translateX(0) translateY(0);
  }
}

.loading {
  position: relative;
  z-index: 1;
  padding-top: 10%;
  color: #0f4e81;
  text-align: center;
  animation: textColor 10s infinite;
  -webkit-animation: textColor 10s infinite;
  -moz-animation: textColor 10s infinite;
}

span {
  font-size: 50px;
  display: block;
  animation: spin 10s infinite;
  -webkit-animation: spin 10s infinite;
  -moz-animation: spin 10s infinite;
}

h1 {
  overflow: hidden;
  width: 30em;
  width: 30ch;
  margin: 0 auto;
  font-family: "chenyuluoyan";
  white-space: nowrap;
  animation: type 2s steps(20, end) infinite alternate;
  -webkit-animation: type 2s steps(20, end) infinite alternate;
}
</style>
