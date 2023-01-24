import React from 'react';
import './card.css';

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.imgUrl} alt={props.title} />
            <div className="card-body">
                <h3 className="card-title">{props.title}</h3>
                <p className="card-text">{props.description}</p>
                <a href={props.buttonUrl} className="btn btn-primary">{props.buttonText}</a>
            </div>
        </div>
    );
}

export default Card;
