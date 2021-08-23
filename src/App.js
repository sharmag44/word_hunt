import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { Container, Switch, withStyles } from "@material-ui/core";
import Header from "./components/Header/Header";
import Definitions from "./components/Definitions/Definitions";
import { grey } from '@material-ui/core/colors';


function App() {
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState("en");
  const [LightMode, setLightMode] = useState(false)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      );

      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(meanings);
  useEffect(() => {
    dictionaryApi();
  }, [word, category, dictionaryApi]);
  
  const Darkmode = withStyles({
    switchBase: {
      color: grey[50],
      "&$checked": {
        color: grey[900],
      },
      "&$checked + $track": {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);
  
  return (
    <div
      className="App"
      style={{ height: "100vh", backgroundColor: LightMode? "lightgray":"#282c34", color: LightMode ? "black":"#ffffff",transition:"all 0.5s linear" }}
    >
      <Container
        maxWidth="md"
        style={{ display: "flex", flexDirection: "column" ,justifyContent:"space-evenly"}}
      > 
      <div style={{position:'absolute',top:0,right:15,paddingTop:10}}>
        <span>{LightMode? "Dark": "Light"}Mode</span>
        <Darkmode  checked={LightMode} onChange={()=> setLightMode(!LightMode)}/></div>
        <Header
          word={word}
          setWord={setWord}
          category={category}
          setCategory={setCategory}
          LightMode = {LightMode}
        />
       {meanings && <Definitions word={word} meanings={meanings} category={category}/>}
      </Container>
    </div>
  );
}

export default App;
