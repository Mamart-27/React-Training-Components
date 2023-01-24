import React from 'react';
import './breadcrumb.css';

const Breadcrumb = (props) => {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                {props.links.map((link, index) => (
                    <li key={index} className="breadcrumb-item">
                        <a href={link.url}>{link.label}</a>
                    </li>
                ))}
            </ol>
        </nav>
    );
}

export default Breadcrumb;
