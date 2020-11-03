<template>
  <div>
    <AddressBar />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import AddressBar from '~/components/address-bar/AddressBar.vue';

@Component({
  components: { AddressBar },
})
export default class Default extends Vue {}
</script>
