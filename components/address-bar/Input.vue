<template>
  <div class="relative">
    <label v-show="value !== ''" for="input" class="co-address-bar__input-label">{{ placeholder }}</label>
    <input
      id="input"
      @input="input($event.target.value)"
      @keypress.enter="enterValue"
      :value="value"
      :placeholder="placeholder"
      type="text"
      class="co-address-bar__input-field"
      :class="smInput ? 'w-12' : 'w-28 pr-8 lg:w-80'"
      autocomplete="off"
    />
    <span v-if="showClearButton" class="co-address-bar__input-clear" @click="clear">x</span>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "nuxt-property-decorator";

@Component
export default class Input extends Vue {
  @Prop({ default: "" }) private readonly value!: string;
  @Prop({ default: "" }) private readonly placeholder!: string;
  @Prop({ default: false }) private readonly clearButton!: boolean;
  @Prop({ default: false }) private readonly smInput!: boolean;

  private get showClearButton(): boolean {
    return this.clearButton && this.value !== "";
  }

  @Emit()
  private input(value: string): string {
    return value;
  }

  @Emit()
  private clear() {}

  @Emit()
  private enterValue() {}
}
</script>
