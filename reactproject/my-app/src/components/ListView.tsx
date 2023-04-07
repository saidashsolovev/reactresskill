import {InformProviderContext} from '../contexts/InformProvider'
import {Inform} from '../models/InformType'
import React, { useContext } from 'react';
import Filters from '../components/Filters'

export const List =() =>{
    const {information,likefilter,} = useContext(InformProviderContext);
    return(
        <div>
            <Filters />
    {information.filter((item:Inform)=>item.likes>=likefilter).map((item:Inform) => (
       <><div className='itemcontainer' key={item.id}>
            <h1>{item.title}</h1>
            <h3>{item.text}</h3>
            <h3 className="dislike">Likes: {item.likes}</h3>
        </div>
        <br />
        </> 
    ))}
    </div>
    );
};
 export default List;
 