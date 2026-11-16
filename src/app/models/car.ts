import { Accessory } from "./accessory";
export interface Car {

  id: string;
  infos: {
    brand: string;
    model: string;
    immatriculation: string;
  };
  photo: string;
  power: number;
  circulationDate: Date;
  isAutomatic: boolean;
  accessoryList: Accessory[];
}

