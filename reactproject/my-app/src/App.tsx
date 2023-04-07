
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Itemss from './components/ItemLists';
import {Inform} from './models/InformType';
import {AddArticle} from './components/addArticle';
import  { useContext } from 'react';
import {InformProviderContext} from './contexts/InformProvider'

const App = () => {

  const {information,setInformation} = useContext(InformProviderContext);
  const {like,dislike}=useContext(InformProviderContext);
  
  const addToList = (newInfo:Inform) => {  
    setInformation([...information, newInfo])
  };

  return ( 
    
        <div>               
            <Itemss information={information} like={like} dislike={dislike}  />
            <AddArticle addToList = {addToList}  />  
        </div>  
        
  );
};

export default App;
