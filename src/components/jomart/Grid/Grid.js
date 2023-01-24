import React from 'react';
import './Grid.css';

const Grid = (props) => {
    const { items } = props;

    return (
        <div className="grid">
            {items.map(item => (
                <div key={item.id} className="grid-item">
                    {item.content}
                </div>
            ))}
        </div>
    );
}

export default Grid;
