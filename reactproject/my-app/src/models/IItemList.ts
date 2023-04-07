import {Inform} from '../models/InformType'
export interface IItemList{
    information:Inform[];
    like: (id: string) => void;
    dislike: (id: string) => void;
}