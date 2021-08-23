import { createTheme, MenuItem, TextField, ThemeProvider } from '@material-ui/core';
import React from 'react';
import "./Header.css";
import categories from "../../data/category";

function Header({word,setWord,category,setCategory,LightMode}) {
  const darkTheme = createTheme({
    palette: {
      primary:{
        main:LightMode ? '#000':'#fff'
      },
      type:LightMode ? 'light': 'dark',
    },
  });
 const handleChange =(language)=>{
   setCategory(language)
   setWord("")
 }
    return (
        <div className="header">
          <span className="title">{word ? word :"Word Hunt"}</span>  
          <div className="inputs">
          <ThemeProvider theme={darkTheme}>
          <TextField  label="Search a Word " className="search" value={word} onChange={(event)=>{setWord(event.target.value)}} /> 


          <TextField
          select
          label="Language"
          value={category}
          onChange={(event) => {handleChange(event.target.value)}}
          helperText="Please select your Language"
        >
          {categories.map((option) =>(<MenuItem key={option.label} value={option.label}>{option.value}</MenuItem>))}
        </TextField>
          </ThemeProvider>
          
          </div>
        </div>
    )
}

export default Header
