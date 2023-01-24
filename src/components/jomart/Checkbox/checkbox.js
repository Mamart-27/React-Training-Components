import React, { useState } from 'react';
import './checkbox.css';

const Checkbox = (props) => {
    const [selected, setSelected] = useState([]);
    const { options } = props;

    const handleChange = (e) => {
        const { value } = e.target;
        if(selected.includes(value)){
            setSelected(selected.filter(item => item !== value))
        }else{
            setSelected([...selected, value])
        }
    }

    return (
        <div>
            {options.map(option => (
                <label key={option.value}>
                    <input 
                        type="checkbox" 
                        value={option.value} 
                        checked={selected.includes(option.value)} 
                        onChange={handleChange}
                    />
                    {option.label}
                </label>
            ))}
        </div>
    );
}

export default Checkbox;
