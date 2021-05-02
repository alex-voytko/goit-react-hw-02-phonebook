import React from 'react';

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

export default Filter;
