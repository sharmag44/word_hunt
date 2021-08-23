import React from "react";
import "./Definitions.css";

function Definitions({ word, meanings, category,LightMode }) {
  return (
    <div className="definition">
     {meanings[0] && word && category === "en" && (
        <audio
          style={{ backgroundColor: "#fff", borderRadius: 10 }}
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          controls
        >
          Your browser does not support the audio element.
        </audio>
      )}
      {word === "" ? (
        <sapn className="subTitle">Start by Typing a word in Search Box</sapn>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def) => (
              <div
                className="singleMean"
                style={{ backgroundColor: LightMode ? "#3b5360": "white", color: LightMode ? "#fff" : "black" }}
              >
                <strong>{def.definition}</strong>
                <hr style={{backgroundColor:"black",width:"100%"}}/>
                {
                    def.example && <span><strong>Example: </strong>{def.example}</span>
                }
                {  def.synonyms && <span><strong>Synonyms: </strong>{def.synonyms.map(s => `${s},`)}</span>}
              </div>
            ))
          )
        )
      )}
    </div>
  );
}

export default Definitions;
