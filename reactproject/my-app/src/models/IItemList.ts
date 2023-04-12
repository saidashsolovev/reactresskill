import { InformType } from "../models/InformType";
export interface IItemList {
  information: InformType[];
  like: (id: string) => void;
  dislike: (id: string) => void;
}
