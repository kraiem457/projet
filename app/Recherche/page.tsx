"use client";
import Image from 'next/image'
import './recherche.css'
import  {useState} from "react";
import React, {KeyboardEvent} from 'react';
import {Component} from 'react';
export default function Home() {

const [input, setInput] =  useState('');
const [isKeyReleased, setIsKeyReleased] = useState(false);
const [tags, setTags] = React.useState<string[]>([]);
const onKeyUp = () => {
    setIsKeyReleased(true);
  }
const onChange = (e:any) => {
    const { value } = e.target;
    setInput(value);
  };
  const onKeyDown = (e:any) => {
    const { key } = e;
    const trimmedInput = input.trim();
 
    if (key === ',' && trimmedInput.length && !tags.includes(trimmedInput)) {
      e.preventDefault();
      setTags(prevState => [...prevState, trimmedInput]);
      setInput('');
    }
    if (key === "Backspace" && !input.length && tags.length && isKeyReleased)  {
        e.preventDefault();
        const tagsCopy = [...tags];
        const poppedTag = tagsCopy.pop() as string;
        
        setTags(tagsCopy);
        setInput(poppedTag);
      }
       setIsKeyReleased(false);
  };
  const deleteTag = (index:any) => {
    setTags(prevState => prevState.filter((tag, i) => i !== index))
  }
    return (
  
    <div className='container'>
    {tags.map((tag, index) => (
  <div className="tag">
    {tag}
    <button onClick={() => deleteTag(index)}>x</button>
  </div>
))}
 
  <input
    value={input}
    placeholder="Enter a tag"
    onKeyDown={onKeyDown}
    onChange={onChange}
  />
</div>

  



  )
}
