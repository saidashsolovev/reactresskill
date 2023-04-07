import React, { Component, FC, useState } from 'react';
import {IAddArticle} from '../models/IAddArticle'
import Button from 'react-bootstrap/Button';

 export const AddArticle:FC<IAddArticle>  = ( {addToList} )=>  {

    const [text, setText] = useState("Empty");
    const [title, setTitle] = useState("Empty");
    const addToListArc = () =>{
        const now = new Date();
         addToList({id: String(now.toLocaleString()+now.getMilliseconds()), title: title, text: text, likes: 0 })
    }
    
    return (
        <div>
        <input type="text"  onChange={(e) => setText(e.target.value !="" ?e.target.value: "Empty")}></input>
        <input type="text" onChange={(e) => setTitle(e.target.value !="" ?e.target.value: "Empty")} ></input>
        <Button onClick={() => addToListArc()}>Add to list</Button>
    </div>
    );
  }
  
  export default AddArticle;