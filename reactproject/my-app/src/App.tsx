
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemLists from './components/ItemLists';
import {InformType} from './models/InformType';
import {AddArticle} from './components/AddArticle';
import  { useContext } from 'react';
import {InformProviderContext} from './contexts/InformProvider'

const App = () => {

  const {information,setInformation} = useContext(InformProviderContext);
  const {like,dislike}=useContext(InformProviderContext);
  
  const addToList = (newInfo:InformType) => {  
    setInformation([...information, newInfo])
  };

  return ( 
    
        <div>               
            <ItemLists information={information} like={like} dislike={dislike}  />
            <AddArticle addToList = {addToList}  />  
        </div>  
        
  );
};

export default App;
