import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

export default function ContactList(props) {
  const inputEl = useRef("");

  const deleteHandler = (id) => {
    props.getContactId(id);
  };

  const renderConatctList = props.contacts.map((contact, index) => {
    return (
      <Card
        contact={contact}
        clickHandler={deleteHandler}
        key={contact.uuid}
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
        <div className="ui icon input" style={{ width: "100%" }}>
          <input
            ref={inputEl}
            type="text"
            name="search"
            id="search"
            className="prompt"
            placeholder="Search Contact"
            value={props.search}
            onChange={getSearch}
          />
          <i className="search icon" />
        </div>
      </div>
      <div className="container d-flex justify-content-center pb-4">
        <div className="row">
          {renderConatctList.length > 0
            ? renderConatctList
            : "No contact available..."}
        </div>
      </div>
    </div>
  );
}
