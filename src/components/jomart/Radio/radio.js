import React, { useState } from 'react';
import './radio.css';

const Radio = ({ options }) => {
    const [selected, setSelected] = useState('');

    return (
        <div className='radio-container'>
            {options.map((option, index) => (
                <div key={index} className='radio-option'>
                    <input
                        type='radio'
                        value={option.value}
                        id={`radio-${index}`}
                        checked={selected === option.value}
                        onChange={e => setSelected(e.target.value)} 
                        className='custom-radio-input'
                    />
                    <label htmlFor={`radio-${index}`}>
                        {option.label}
                    </label>
                </div>
            ))}
        </div>
    );
}

export default Radio;
