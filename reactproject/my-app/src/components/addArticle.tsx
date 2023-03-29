import React, { Component, FC, useState } from 'react';
import {Inform} from '../models/Types'
import Button from 'react-bootstrap/Button';
import nextId from "react-id-generator";

interface IAddArticle{
    addToList: (newInfo:Inform) => void;
}

 export const AddArticle:FC<IAddArticle>  = ( {addToList} )=>  {

    const [text, setText] = useState("Empty");
    const [title, setTitle] = useState("Empty");
    const addToListArc = () =>{

         addToList({id: nextId(), title: title, text: text, likes: 0 })
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