import { InformType } from "./InformType";

export type InformProviderType = {
  information: InformType[];
  setInformation: (item: InformType[]) => void;
  like: (id: string) => void;
  dislike: (id: string) => void;
  deleteEl: (id: string) => void;
  likefilter: number;
  setlikefilter: (id: number) => void;
};
