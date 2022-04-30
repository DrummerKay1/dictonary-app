import React from "react";
export default function Phonetic(props) {
  if (props.phonetic.audio) {
    return (
      <div className="Phonetic">
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          {props.phonetic.text}
        </a>
      </div>
    );
  } else {
    return null;
  }
}
