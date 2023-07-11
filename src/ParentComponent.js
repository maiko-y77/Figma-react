import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
    const data = {
        title: 'Online Experience',
        description: 'Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.',
    };

    return (
        <div>
            <h1>airbnb</h1>
            <img src="e5296b28-4bb9-4139-bba3-088d6f8b9126.jpg.png" alt=""></img>
            <ChildComponent data={data} />
        </div>
    );
};

export default ParentComponent;
