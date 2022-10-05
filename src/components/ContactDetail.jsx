import React from "react";
import { Link } from "react-router-dom";
import user from "../images/images.jpg";

export default function ContactDetail(props) {
  const { name, address, gstin, email, contact_number, alt_contact_number } =
    props.location.state.contact;
  return (
    <div className="container">
      <div className="card text-dark w-100">
        <div className="p-10">
          <h1 className="card-title text-center">{name}</h1>
          <p className="card-text text-center">Address - {address}</p>
          <p className="card-text text-center">GSTIN - {gstin}</p>
          <p className="card-text text-center">Email - {email}</p>
          <p className="card-text text-center">Contact Number - {contact_number}</p>
          <p className="card-text text-center">Alternate Contact Number - {alt_contact_number}</p>
        </div>
        <div className="text-center">
          <Link to="/">
            <button className="btn btn-primary mb-4">Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
