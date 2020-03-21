import React from 'react';

const Row = ({ fluid, children }) => {
    return (
        // ternary operator
        <div className={`row${fluid ? "-fluid" : ""}`}>
            {children}
        </div>
    )
};

export default Row;