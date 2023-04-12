import { InformType } from "../models/InformType";
export interface IAddArticle {
  addToList: (newInfo: InformType) => void;
}
