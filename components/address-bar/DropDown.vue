<template>
  <div class="co-address-bar__dropdown-container">
    <p
      class="co-address-bar__dropdown-text"
      v-for="(item, index) in content"
      :key="index"
      @click="emitSelection(index)"
    >
      {{ item.text }}
    </p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "nuxt-property-decorator";
import { DropDownContent } from "~/config/DropDownContent";

@Component
export default class DropDown extends Vue {
  @Prop() content!: DropDownContent[];

  @Emit()
  emitSelection(index: number): number {
    return index;
  }
}
</script>
