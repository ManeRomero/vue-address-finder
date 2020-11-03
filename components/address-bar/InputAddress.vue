<template>
  <div class="co-address-bar__input-container">
    <div class="co-address-bar__input-tooltip" :title="instructions">
      <span>?</span>
    </div>
    <div class="relative">
      <Input
        @input="handleInput($event)"
        v-debounce:300ms="getAdressesFromGoogleMaps"
        :value="store.getAddress"
        :placeholder="placeholderAddress"
        :clear-button="true"
        @clear="clearAddress"
      />
      <DropDown
        v-if="isTypedAddress"
        :content="tronchi"
        @emit-selection="handleAddressChange"
        v-on-clickaway="hideDropDown"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, getModule } from "nuxt-property-decorator";
import DropDown from "~/components/address-bar/DropDown.vue";
import { DropDownContent } from "~/config/DropDownContent";
import Input from "~/components/address-bar/Input.vue";
import SearchBarStore from "~/store/SearchBarStore";
import { directive as onClickaway } from "vue-clickaway";

@Component({
  components: { Input, DropDown },
  directives: { onClickaway },
})
export default class InputAddress extends Vue {
  private store: SearchBarStore = getModule(SearchBarStore, this.$store);
  private mirrorAddress: string = "";
  private placeholderAddress: string = "Address";
  private instructions: string = "Type at the address field to get google maps autocomplete";
  private tronchi: DropDownContent[] = [{ active: false, text: "tronchi" }];

  private get isTypedAddress(): boolean {
    return this.mirrorAddress !== "";
  }

  private handleAddressChange(index: number) {
    this.store.setAddress(this.tronchi[index].text);
    this.mirrorAddress = "";
  }

  private handleInput(text: string) {
    this.mirrorAddress = text;
    this.store.setAddress(text);
  }

  private hideDropDown() {
    this.mirrorAddress = "";
  }

  private clearAddress() {
    this.store.setAddress("");
    this.mirrorAddress = "";
  }

  private getAdressesFromGoogleMaps() {
    console.log("test after 300ms");
  }
}
</script>
