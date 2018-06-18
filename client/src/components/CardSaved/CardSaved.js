import React from "react";
import "./CardSaved.css";
 
const CardSaved = props => (
  // <div className="card" onClick={() => props.seeArticle(props.id)}>
  <div className="card" id={props.id}>
    <a href={props.url} target="_blank"><h5 className="card-title">{props.title}</h5></a>
    <a className="btn" onClick={() => props.deleteArticles(props.id)} id={props.id}>Delete Article</a>
  </div>
);

export default CardSaved;
