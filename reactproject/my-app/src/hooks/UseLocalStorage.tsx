import React, { useState, useEffect } from 'react';

export const useLocalStorage: any = (key:string, initialValue:any) => {

  const getValue =() =>{
    const storaged = localStorage.getItem(key);
    if(storaged){
      return JSON.parse(storaged);
    }
    return initialValue 
  }

  const [value, setValue] = useState(getValue);
  
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage 