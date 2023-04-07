import  {useContext }from 'react'
import {InformProviderContext} from '../contexts/InformProvider'

export const Filters = () => {
    let {likefilter,setlikefilter} = useContext(InformProviderContext);
      
    return (
        <div>
          <label>Filter by Likes <input type="number" value ={likefilter} onChange={(e) => {setlikefilter(e.target.valueAsNumber)}}  /></label>  
        </div>
    );
  };
  
  export default Filters;
  