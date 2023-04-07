import Button from 'react-bootstrap/Button';
import {InformProviderContext} from '../contexts/InformProvider'
import  { useContext, FC } from 'react';
import {Inform} from '../models/InformType';

interface IItemButton{
    item: Inform;
}
export const ItemButton: FC<IItemButton> = ({item}) => {
    const {like, dislike, deleteEl} = useContext(InformProviderContext);

return(
<>
<Button  variant="secondary" onClick={() => like(item.id)}>Likes: {item.likes}</Button>
<Button  className="dislike"  onClick={() => dislike(item.id)}>Dislike</Button>
<Button className="delete"   onClick={() => deleteEl(item.id)}>Delete</Button>
</>

);

}

