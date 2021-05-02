import React from 'react';

const Container = ({ className, children, title }) => (
    <div className={className}>
        <h2>{title}</h2>
        {children}
    </div>
);

export default Container;
