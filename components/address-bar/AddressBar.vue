<template>
  <div class="co-address-bar__container">
    <div class="co-address-bar__inner">
      <SelectorAddressType :selected="activeAddressType" />
      <InputAddress />
      <Input
        v-if="isTypedAddress && !plantDoorToAddressWasAdded"
        :placeholder="placeholderNum"
        :value="store.getPlantDoor"
        @input="handleInputPlantDoorChanged($event)"
        :sm-input="true"
        @enter-value="addPlantDoorToAddress"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, getModule } from "nuxt-property-decorator";
import SelectorAddressType from "~/components/address-bar/SelectorAddressType.vue";
import SearchBarStore from "~/store/SearchBarStore";
import { DropDownContent } from "~/config/DropDownContent";
import Input from "~/components/address-bar/Input.vue";
import InputAddress from "~/components/address-bar/InputAddress.vue";

@Component({
  components: { SelectorAddressType, Input, InputAddress },
})
export default class AddressBar extends Vue {
  private store: SearchBarStore = getModule(SearchBarStore, this.$store);
  private dropdownContent: DropDownContent[] = this.store.getAddressTypes;
  private placeholderNum: string = "Nº";
  private plantDoorToAddressWasAdded: boolean = false;

  beforeMount() {
    if (this.dropdownContent.length > 0) {
      this.activeAddressType;
    }
  }

  private get activeAddressType(): string {
    const index = this.dropdownContent.findIndex((item) => item.active);
    return this.dropdownContent[index].text;
  }

  private get isTypedAddress(): boolean {
    return this.store.getAddress !== "";
  }

  private handleInputPlantDoorChanged(value: string) {
    this.store.setPlantDoor(value);
    this.plantDoorToAddressWasAdded = false;
  }

  private addPlantDoorToAddress() {
    if (!this.plantDoorToAddressWasAdded) {
      this.store.setPlantDoorToAddress();
      this.plantDoorToAddressWasAdded = true;
    }
  }
}
</script>
