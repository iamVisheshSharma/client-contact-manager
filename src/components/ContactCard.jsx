import React from "react";
import user from "../images/user.jpg";
import { Link } from "react-router-dom";

export default function ContactCard(props) {
  return (
    <div
      style={{
        border: "4px solid black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <img src={user} className="ui avatar image" alt="avatar" />
      <div style={{ border: "2px solid black", display: "flex", flexDirection: "column", alignItems: "center" }}>
        {/* <Link
          to={{
            pathname: `/contact/${props.contact.uuid}`,
            state: { contact: props.contact },
          }}
        > */}
          <div style={{fontSize: "18px", fontWeight: "bolder"}}>{props.contact.name}</div>
          <div style={{alignContent: "center"}}>{props.contact.address}</div>
          <div>{props.contact.gstin}</div>
          <div>{props.contact.contact_number}</div>
          <div>{props.contact.alt_contact_number}</div>
        {/* </Link> */}
      </div>
      <div>
        <i
          className="trash alternate outline icon"
          style={{ color: "red", marginTop: "7px", cursor: "pointer" }}
          onClick={() => props.clickHandler(props.contact.id)}
        />
        <Link to={{ pathname: `/edit`, state: { contact: props.contact } }}>
          <i
            className="edit alternate outline icon"
            style={{ color: "blue", marginTop: "7px", cursor: "pointer" }}
          />
        </Link>
      </div>
    </div>
  );
}
