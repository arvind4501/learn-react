import React from "react";
import { useState } from "react";

export default function Todolist(props){
  return(
    <>
      <li>
        {props.item}
        <button onClick={props.deleteListItem(props.index)}>-</button>
      </li>
    </>
  )
}