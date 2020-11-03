import Vue from "vue";
import vueDebounce, { PluginConfig } from "vue-debounce";

Vue.use<PluginConfig>(vueDebounce, { lock: true, listenTo: "input" });
