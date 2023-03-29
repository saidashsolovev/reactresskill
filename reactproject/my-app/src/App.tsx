
import  {useState }from 'react'
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import BaseNavbar from './components/NavBar';
import {Inform} from './models/Types';
import {AddArticle} from './components/addArticle';
import {useLocalStorage} from './hooks/UseLocalStorage';

const initialState : Inform[] =
[
   { id: '1' , title: "Title1", text: "Text1", likes: 0 },
   { id: '2', title: "Title2", text: "Text2", likes: 1 },
   { id: '3', title: "Title3", text: "Text3", likes: 2 },
];

const App = () => {


  const [information, setinformation] = useLocalStorage('information',initialState);
  
  
  const like = (id: string) => {
      setinformation(
          information.map((item:Inform) =>
              item.id === id ? { ...item, likes: item.likes + 1 } : item
          )
      );
  };
  const dislike = (id: string) => {
    setinformation(
        information.map((item:Inform) =>
            item.id === id ? { ...item, likes: item.likes - 1 } : item
        )
    );
};
  const deleteEl = (id: string) => {
      setinformation(information.filter((item:Inform) => item.id !== id));
  };


  const addToList = (newInfo:Inform) => {
  
      setinformation([...information, newInfo])
     
      console.log(newInfo)
  };


  return (
      <div>
        <BaseNavbar />

      <div className="container">
          information:
          {information.map((item:Inform) => (
              <div key={item.id}>
                  <h1>{item.title}</h1>
                  <h3>{item.text}</h3>
                  <Button  variant="secondary" onClick={() => like(item.id)}>Likes: {item.likes}</Button>
                  <Button  className="dislike"  onClick={() => dislike(item.id)}>Dislike</Button>
                  <Button className="delete"   onClick={() => deleteEl(item.id)}>Delete</Button>
              </div>
          ))}
           <AddArticle addToList = {addToList}  />

        </div>   
      </div>
  );
};

export default App;
