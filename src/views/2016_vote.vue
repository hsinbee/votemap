<script setup>
import HelloWorld from '../components/HelloWorld.vue'

import {useMyStore} from  '../stores/pinia.js'
</script>

<template>
<p>1111</p>
<router-link to="/1111">1111</router-link>

<div>{{useMyStore().count}}</div>
<div>{{useMyStore().String}}</div>

<HelloWorld/>
</template>

<style scoped>

</style>
