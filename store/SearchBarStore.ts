import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";
import { DropDownContent, addressTypes } from "~/config/DropDownContent";

@Module({
  name: "SearchBarStore",
  namespaced: true,
  stateFactory: true,
})
export default class SearchBarStore extends VuexModule {
  private addressTypes: DropDownContent[] = addressTypes;
  private address: string = "";
  private plantDoor: string = "";

  get getAddressTypes(): DropDownContent[] {
    return this.addressTypes;
  }

  get getAddress(): string {
    return this.address;
  }

  get getPlantDoor(): string {
    return this.plantDoor;
  }

  @Action
  switchActiveAddressType(index: number) {
    this.context.commit("allAddressTypesToFalse");
    this.context.commit("setAddressTypeToActive", index);
  }

  @Action
  setPlantDoorToAddress() {
    this.context.commit("setAddress", `${this.plantDoor}, ${this.address}`);
  }

  @Mutation
  allAddressTypesToFalse() {
    this.addressTypes.forEach((addressType) => {
      addressType.active = false;
    });
  }

  @Mutation
  setAddressTypeToActive(index: number) {
    this.addressTypes[index].active = true;
  }

  @Mutation
  setAddress(value: string) {
    this.address = value;
  }

  @Mutation
  setPlantDoor(value: string) {
    this.plantDoor = value;
  }
}
