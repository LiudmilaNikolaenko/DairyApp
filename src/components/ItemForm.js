import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addItem} from '../AC';

class ItemForm extends React.Component {
  static propTypes = {
    addItem: PropTypes.func
  };

  state = { name: '' };

  handleSubmit = ev => {
    ev.preventDefault();
    this.props.addItem(this.state.name);
    this.setState({ name: '' })
  };

  handleChange = ev => {
    this.setState({ name: ev.target.value });
  };

  render() {
    return (
      <form onSubmit = {this.handleSubmit}>
        <div className = 'py-2'>
          <div className = 'row'>
            <div className = 'col-xl-8'>
              <input type = 'text'
                placeholder = 'Type name here...'
                value = {this.state.name}
                onChange = {this.handleChange}
                className = 'form-control w-100' />
            </div>
            <div className = 'col-xl-4'>
              <button type = 'submit' 
                disabled = {!this.state.name}
                className = 'btn btn-info w-100 font-weight-light'>Add new</button>
            </div>
          </div>
        </div>
      </form>
    )
  };
}

export default connect(null, {addItem})(ItemForm);