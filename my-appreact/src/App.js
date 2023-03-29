
import './App.css';
import React, {useState } from 'react'

 const App = () => {
  const initialState = [
      { id: 1, title: "Title1", text: "Text1", likes: 0 },
      { id: 2, title: "Title2", text: "Text2", likes: 1 },
      { id: 3, title: "Title3", text: "Text3", likes: 2 },
  ];
  const [text, setText] = useState("Empty");
  const [title, setTitle] = useState("Empty");
  const [information, setinformation] = useState(initialState);

  const like = (id) => {
      setinformation(
          information.map((item) =>
              item.id === id ? { ...item, likes: item.likes + 1 } : item
          )
      );
  };
  const dislike = (id) => {
    setinformation(
        information.map((item) =>
            item.id === id ? { ...item, likes: item.likes - 1 } : item
        )
    );
};
  const deleteEl = (id) => {
      setinformation(information.filter((item) => item.id !== id));
  };


  const addToList = () => {
    if(!text || text ==="") setTitle("Empty Text");
    if(!title ||title ==="") setText("Empty Title");
  
      setinformation([...information, { id: Math.max(...information.map(o => o.id))+1 , title: title, text: text, likes: 0 }])
  };


  return (
      <div>
      <div>
          information:
          {information.map(({ id, title, text, likes }) => (
              <div key={id}>
                  <h1>{title}</h1>
                  <h3>{text}</h3>
                  <button onClick={() => like(id)}>Likes: {likes}</button>
                  <button onClick={() => dislike(id)}>Dislike</button>
                  <button onClick={() => deleteEl(id)}>Delete</button>
              </div>
          ))}
          </div>
          <div>
              <input type="text"  onChange={(e) => setText(e.target.value)}></input>
              <input type="text" onChange={(e) => setTitle(e.target.value)} ></input>
              <button onClick={() => addToList()}>Add to list</button>
          </div>
      </div>
  );
};
export default App