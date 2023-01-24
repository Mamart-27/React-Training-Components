import React, { useState } from 'react';
import './progressbar.css';

const ProgressBar = (props) => {
    const [completion, setCompletion] = useState(props.completion || 0);

    const handleChange = (e) => {
        setCompletion(e.target.value);
    }

    return (
        <div className="progress">
            
            <div>
            <input type="range" min="0" max="100" value={completion} onChange={handleChange} />
            </div>
        </div>
    );
}

export default ProgressBar;
