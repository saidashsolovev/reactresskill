import { InformType } from "../models/InformType";
import { InformProviderType } from "../models/InformProviderType";
import { createContext, ReactElement, useState } from "react";
import { useLocalStorage } from "../hooks/UseLocalStorage";

export const InformProviderContext = createContext<InformProviderType>({
  information: [],
  setInformation: (item: InformType[]) => {},
  like: (id: string) => {},
  dislike: (id: string) => {},
  deleteEl: (id: string) => {},
  likefilter: 0,
  setlikefilter: (id: number) => {},
});

export const InformProvider = (props: { children: ReactElement }) => {
  const [information, setInformation] = useLocalStorage("information", []);
  const [likefilter, setlikefilter] = useState<number>(0);

  const like = (id: string) => {
    setInformation(
      information.map((item: InformType) =>
        item.id === id ? { ...item, likes: item.likes + 1 } : item
      )
    );
  };
  const dislike = (id: string) => {
    setInformation(
      information.map((item: InformType) =>
        item.id === id ? { ...item, likes: item.likes - 1 } : item
      )
    );
  };

  const deleteEl = (id: string) => {
    setInformation(information.filter((item: InformType) => item.id !== id));
  };

  return (
    <InformProviderContext.Provider
      value={{
        information: information,
        setInformation: setInformation,
        like: like,
        dislike: dislike,
        deleteEl: deleteEl,
        likefilter: likefilter as number,
        setlikefilter: setlikefilter,
      }}
    >
      {props.children}
    </InformProviderContext.Provider>
  );
};
