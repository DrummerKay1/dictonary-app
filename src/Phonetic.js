import React from "react";
import "./Phonetic.css";
export default function Phonetic(props) {
  if (props.phonetic.audio) {
    return (
      <div className="Phonetic">
        <div className="text">{props.phonetic.text}</div>
        <br />
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          🔊
        </a>
      </div>
    );
  } else {
    return null;
  }
}
