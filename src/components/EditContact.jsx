import React, { Component } from "react";

export default class EditContact extends Component {
  constructor(props) {
    super(props);
    const {
      uuid,
      name,
      email,
      gstin,
      address,
      contact_number,
      alt_contact_number,
    } = props.location.state.contact;
    this.state = {
      uuid,
      name,
      email,
      address,
      gstin,
      contact_number,
      alt_contact_number,
    };
  }

  updateContact = (e) => {
    e.preventDefault();
    if (
      this.state.name === "" &&
      this.state.address === "" &&
      this.state.contact_number === "" &&
      this.state.gstin === ""
    ) {
      alert("All fields are mandatory!");
      return;
    }
    this.props.updateContactHandler(this.state);
    this.setState({
      name: "",
      email: "",
      gstin: "",
      address: "",
      contact_number: "",
      alt_contact_number: "",
    });
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="ui main">
        <h2>Edit Contact</h2>
        <form className="ui form" onSubmit={this.updateContact}>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name || ''}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email || ''}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <div className="field">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={this.state.address || ''}
              onChange={(e) => this.setState({ address: e.target.value })}
            />
          </div>
          <div className="field">
            <label htmlFor="gstin">GST</label>
            <input
              type="text"
              name="gstin"
              placeholder="GST Number"
              value={this.state.gstin || ''}
              onChange={(e) => this.setState({ gstin: e.target.value })}
            />
          </div>
          <div className="field">
            <label htmlFor="contact_number">Contact Number</label>
            <input
              type="text"
              name="contact_number"
              placeholder="Contact Number"
              value={this.state.contact_number || ''}
              onChange={(e) => this.setState({ contact_number: e.target.value })}
            />
          </div>
          <div className="field">
            <label htmlFor="alt_contact_number">ALternative Contact Number</label>
            <input
              type="text"
              name="alt_contact_number"
              placeholder="Alternative Contact Number"
              value={this.state.alt_contact_number || ''}
              onChange={(e) => this.setState({ alt_contact_number: e.target.value })}
            />
          </div>
          <button className="ui button blue">Update</button>
        </form>
      </div>
    );
  }
}
