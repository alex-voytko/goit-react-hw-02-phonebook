import React, { Component } from 'react';
import shortId from 'shortid';

class ContactForm extends Component {
    state = {
        name: '',
        id: '',
        number: '',
    };
    inputName = event => {
        const { value, name } = event.currentTarget;
        this.setState({
            [name]: value,
            id: shortId.generate(),
        });
    };
    handleSubmit = event => {
        event.preventDefault();
        const nameValue = event.currentTarget[0].defaultValue;
        if (!this.props.existingNames.includes(nameValue)) {
            this.props.onSubmit(this.state);
            this.reset();
        } else {
            alert('This name has been already existing, try another one!');
        }
    };
    reset = () => {
        this.setState({ name: '', id: '', number: '' });
    };
    render() {
        const { handleSubmit, inputName } = this;
        const { id, name, number } = this.state;
        return (
            <>
                <form onSubmit={handleSubmit}>
                    <label htmlFor={id} className="label name">
                        Name
                    </label>
                    <input
                        className="input"
                        type="text"
                        name="name"
                        id={id}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов."
                        required
                        onChange={inputName}
                        value={name}
                    />
                    <label htmlFor={id} className="label number">
                        Number
                    </label>
                    <input
                        className="input"
                        type="tel"
                        name="number"
                        id={id}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        required
                        onChange={inputName}
                        value={number}
                    />
                    <button type="submit">Add contact</button>
                </form>
            </>
        );
    }
}

export default ContactForm;
