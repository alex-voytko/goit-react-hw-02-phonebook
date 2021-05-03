import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ className, children, title }) => (
    <div className={className}>
        <h2>{title}</h2>
        {children}
    </div>
);

Container.propTypes = {
    className: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired,
};

export default Container;
