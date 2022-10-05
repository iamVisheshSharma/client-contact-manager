import React, { Component } from 'react'

export default class AddContact extends Component {
  state = {
    name: '',
    email: '',
    address: '',
    gstin: '',
    contact_number: '',
    alt_contact_number: ''
  }

  //This function helps to enter only number in input box
  handlerChange2 = (e) => {
    const var_name = e.target.name;
    if(isNaN(e.target.value)){
      return;
    }
    this.setState({[var_name]: e.target.value.replace(/\D/g,"")});
  }

  addContact = (e) => {
    e.preventDefault();
    if (this.state.name === '' && this.state.address === '' && this.state.contactNumber === '' && this.state.gstin === '') {
      alert('All fields are mandatory!')
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({name: '', email: '', address: '', contactNumber: '', altContactNumber: ''})
    this.props.history.push('/');
  }

  render() {
    return (
      <div className='container'>
        <h2>Add Contact</h2>
        <form className='p-4' onSubmit={this.addContact}>
          <div className="form-group">
            {/* <label htmlFor="name">Name</label> */}
            <input 
              type="text" 
              name='name' 
              className='form-control form-control-lg'
              placeholder='Name'
              value={this.state.name}
              onChange={(e) => this.setState({name: e.target.value})}  
            />
          </div>
          <div className="form-group mt-4">
            {/* <label htmlFor="addresss">Address</label> */}
            <input 
              type="text" 
              name='address' 
              className='form-control form-control-lg'
              placeholder='Address'
              value={this.state.address}
              onChange={(e) => this.setState({address: e.target.value})}
            />
          </div>
          <div className="form-group mt-4">
            {/* <label htmlFor="gstin">GST</label> */}
            <input 
              type="text" 
              name='gstin'
              className='form-control form-control-lg'
              maxLength={15}
              placeholder='GST'
              value={this.state.gstin}
              onChange={(e) => this.setState({gstin: e.target.value.toUpperCase()})}
            />
          </div>
          <div className="form-group mt-4">
            {/* <label htmlFor="addresss">Email</label> */}
            <input 
              type="text" 
              name='email' 
              className='form-control form-control-lg'
              placeholder='Email'
              value={this.state.email}
              onChange={(e) => this.setState({email: e.target.value})}
            />
          </div>
          <div className="form-group mt-4">
            {/* <label htmlFor="contact_number">Contact Number</label> */}
            <input 
              type="text"
              value={this.state.contact_number}
              maxLength={10} 
              name='contact_number' 
              className='form-control form-control-lg'
              placeholder='Contact Number'
              onChange={(e) => this.handlerChange2(e)}
            />
          </div>
          <div className="form-group mt-4">
            {/* <label htmlFor="alt_contact_number">Alternate Contact Number</label> */}
            <input 
              type="text"
              value={this.state.alt_contact_number}
              maxLength={10} 
              name='alt_contact_number' 
              className='form-control form-control-lg'
              placeholder='Alternate Contact Number'
              onChange={(e) => this.handlerChange2(e)}
            />
          </div>
          <button className='ui button blue mt-4'>Add</button>
        </form>
      </div>
    )
  }
}

