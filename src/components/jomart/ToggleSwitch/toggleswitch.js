import React, { useState } from 'react';
import './toggleswitch.css';

const ToggleSwitch = (props) => {
    const [isChecked, setIsChecked] = useState(props.isChecked || false);

    const handleChange = (e) => {
        setIsChecked(e.target.checked);
    }

    return (
        <label className="switch">
            <input type="checkbox" checked={isChecked} onChange={handleChange} />
            <span className="slider round"></span>
        </label>
    );
}

export default ToggleSwitch;
