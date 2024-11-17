import React from "react";
import { useState, useEffect } from "react";
import "./App.scss";



export default function () {
  const [sampleItemDetails, setSampleItemDetails] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
    .then(res => res.json())
    .then(data => setSampleItemDetails(data))
  })
  return (
   <div className="item-box-container">
    <h2>TITLES</h2>
    <ul>
    {sampleItemDetails.map(item => {
      return <li>{item.title}</li>
    })}
    </ul>
      
           
      </div>
  );
}
