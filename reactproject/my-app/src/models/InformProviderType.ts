import {Inform} from './InformType'


export type InformProviderType ={
    information:Inform[];
    setInformation:(item:Inform[]) => void;
    like: (id: string) => void;
    dislike: (id: string) => void;
    deleteEl: (id: string) => void;
    likefilter: number,
    setlikefilter:(id: number) => void,
}