import PropTypes from 'prop-types';
import React, { Component } from 'react';
import "./style.css";

class ContactForm extends Component {
  constructor(props){
    super(props);
    this.state={
      name:"",
      phone:""
    }
  }
  makeObj() {
    const {name, phone}=this.state;
    //very useful
      return {name, phone};
    }
  render() {
    return (
      <form className='form-number' onSubmit={(e)=>{e.preventDefault(); this.props.add(this.makeObj()); this.setState({name:"", phone:""})}}>
        <input

          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onInput={e => {
            this.setState({name:e.target.value})
          }}
          value={this.state.name}
        />
        <br></br>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onInput={e => {
            this.setState({phone:e.target.value})
          }}
          value={this.state.phone}
        />
        <br></br>
  
        <button type='submit'>Add</button>
  
      </form>
    );
  }
}


ContactForm.propTypes = {
    setName: PropTypes.func,
    setPhone: PropTypes.func,
    add: PropTypes.func,
};

export default ContactForm ;
