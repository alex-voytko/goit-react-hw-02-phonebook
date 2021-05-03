import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
    <>
        <label htmlFor="filter" className="label search">
            Search Contact
        </label>
        <input
            value={value}
            name="filter"
            onChange={onChange}
            className="input"
        />
    </>
);

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Filter;
