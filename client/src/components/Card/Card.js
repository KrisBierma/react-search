import React from "react";
import "./Card.css";
 
const Card = props => (
  // <div className="card" onClick={() => props.seeArticle(props.id)}>
  <div className="card" id={props.id}>
    <a href={props.url} target="_blank"><h5 className="card-title">{props.title}</h5></a>
    <a className="btn" onClick={() => props.saveArticles(props.id)} id={props.id}>Save Article</a>
  </div>
);

export default Card;
