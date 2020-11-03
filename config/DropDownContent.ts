export interface DropDownContent {
  active: boolean;
  text: string;
}

export const addressTypes: DropDownContent[] = [
  {
    active: false,
    text: "Residential"
  },
  {
    active: false,
    text: "Domicile"
  },
  {
    active: true,
    text: "Legal"
  },
  {
    active: false,
    text: "Operational"
  },
];
