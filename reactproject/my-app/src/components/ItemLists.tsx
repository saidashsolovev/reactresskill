import { FC } from "react";
import { InformType } from "../models/InformType";
import { ItemButton } from "./ItemButton";
import { IItemList } from "../models/IItemList";

export const ItemLists: FC<IItemList> = ({ information, like, dislike }) => {
  return (
    <div>
      {information.length > 0
        ? information.map((item: InformType) => (
            <>
              <div className="itemcontainer" key={item.id}>
                <h1>{item.title}</h1>
                <h3>{item.text}</h3>
                <ItemButton item={item} />
              </div>
              <br />
            </>
          ))
        : ""}
    </div>
  );
};

export default ItemLists;
