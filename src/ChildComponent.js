import React from 'react';

const ChildComponent = ({ data }) => {
    return (
        <div>
            <h2>{data.title}</h2>
            <p>{data.description}</p>
        </div>
    );
};

export default ChildComponent;
