import React, { useState } from 'react';
import './select.css';

const Select = (props) => {
    const [selected, setSelected] = useState('');
    const { options } = props;

    return (
        <select value={selected} onChange={e => setSelected(e.target.value)}>
            {options.map(option => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}

export default Select;
