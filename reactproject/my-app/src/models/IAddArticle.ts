import {Inform} from '../models/InformType'
export interface IAddArticle{
    addToList: (newInfo:Inform) => void;
}