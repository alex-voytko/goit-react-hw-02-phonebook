import React from 'react';
import PropTypes from 'prop-types';

const ContactList = ({ passArray, onRemove }) => {
    return (
        <>
            <ul className="contact-list">
                {passArray.map(({ id, name, number }) => (
                    <li key={id} id={id}>
                        <p className="text-name">{name}</p>
                        <p className="text-number">{number}</p>
                        <button
                            className="btn-delete"
                            onClick={() => onRemove(id)}
                        >
                            X
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
};

ContactList.propTypes = {
    passArray: PropTypes.array.isRequired,
    onRemove: PropTypes.func.isRequired,
};

export default ContactList;
