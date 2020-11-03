<template>
  <div class="co-home__page">
    <h1 class="co-home__title">Test Nuxt</h1>
    <p class="co-home__subtitle">Address searcher by Manuel Romero</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, getModule } from "nuxt-property-decorator";
import SearchBarStore from "~/store/SearchBarStore";

@Component({
  layout: "Default",
})
export default class Home extends Vue {}
</script>
