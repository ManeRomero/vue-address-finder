<template>
  <div class="co-address-bar__selector-container" @click="showDropDown = true">
    <p class="co-address-bar__selector-text">{{ selected }}</p>
    <span class="co-address-bar__selector-chevron">></span>
    <DropDown
      v-if="showDropDown"
      @click="hideDropDown"
      v-on-clickaway="hideDropDown"
      :content="content"
      @emit-selection="handleSelection"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, getModule } from "nuxt-property-decorator";
import DropDown from "~/components/address-bar/DropDown.vue";
import { DropDownContent } from "~/config/DropDownContent";
import { directive as onClickaway } from "vue-clickaway";
import SearchBarStore from "~/store/SearchBarStore";

@Component({
  components: { DropDown },
  directives: { onClickaway },
})
export default class SelectorAddressType extends Vue {
  @Prop() selected!: string;
  private showDropDown: boolean = false;
  private store: SearchBarStore = getModule(SearchBarStore, this.$store);
  private content: DropDownContent[] = this.store.getAddressTypes;

  private hideDropDown() {
    this.showDropDown = false;
  }

  private handleSelection(index: number) {
    this.store.switchActiveAddressType(index);
  }
}
</script>
