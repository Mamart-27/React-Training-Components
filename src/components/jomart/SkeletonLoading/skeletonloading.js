import React, { useState, useEffect } from 'react';
import './skeletonloading.css';

const SkeletonLoading = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState({});

    useEffect(() => {
        // simulate a data fetching
        setTimeout(() => {
            setData({
                title: "Example Title",
                description: "Example Description"
            });
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <div>
            {isLoading ? (
                <div className="skeleton-loading">
                    <div className="skeleton-loading-line"></div>
                    <div className="skeleton-loading-line"></div>
                    <div className="skeleton-loading-line"></div>
                </div>
            ) : (
                <div>
                    <h1>{data.title}</h1>
                    <p>{data.description}</p>
                </div>
            )}
        </div>
    );
}

export default SkeletonLoading;
