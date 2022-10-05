import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
import Card from "./Card";

export default function ContactList(props) {
  const inputEl = useRef("");

  const deleteHandler = (id) => {
    props.getContactId(id);
  };

  const renderConatctList = props.contacts.map((contact, index) => {
    return (
      // <ContactCard
      //   contact={contact}
      //   clickHandler={deleteHandler}
      //   key={contact.uuid}
      // />

      <Card
        contact={contact}
        clickHandler={deleteHandler}
        key={contact.uuid}
        class={props.contacts.length <= 2 ? "col-md-6" : "col-md-4"}
      />
    );
  });

  const getSearch = () => {
    props.searchKeyword(inputEl.current.value);
  };

  return (
    <div className="main">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>Contact List</h2>
        <Link to="/add">
          <button className="ui button blue right">Add Contact</button>
        </Link>
      </div>
      <div
        className="ui search right"
        style={{
          paddingTop: "1rem",
          display: "flex",
        }}
      >
        <div className="ui icon input" style={{ width: "100%", }}>
          <input
            ref={inputEl}
            type="text"
            name="search"
            id="search"
            className="prompt"
            placeholder="Search Contact"
            value={props.seaarch}
            onChange={getSearch}
          />
          <i className="search icon" />
        </div>
      </div>
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          {renderConatctList.length > 0
            ? renderConatctList
            : "No contact available..."}
        </div>
      </div>
    </div>
  );
}
