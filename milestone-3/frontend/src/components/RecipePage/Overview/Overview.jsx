import React from 'react';
import './Overview.css';

export default function Overview({image, name, source, description}) {
  return (
    <div className="overview">
        <img className="recipeImage" src={image} alt={name}/>
        <h1 className="recipeName">{name}</h1>
        <i>{source}</i><br/>
        <p className="recipeDescription">{description}</p>
    </div>
  );
}
