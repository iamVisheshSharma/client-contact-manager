import { Link } from "react-router-dom";
import user from "../images/images.jpg";
import "./cardStyle.css";

export default function Card(props) {
  return (
    <div className={`${props.class} spacing`}>
      <div className="card text-center">
        {/* <div className="overflow">
          <img src={user} alt="image" className="card-img-top" />
        </div> */}
        <div className="card-body text-dark">
          <h4 className="card-title">{props.contact.name.toUpperCase()}</h4>
          <p className="card-text">{props.contact.address}</p>
          <p className="card-text">
            Mobile No - {props.contact.contact_number}
          </p>
          {props.contact.alt_contact_number && (
            <p className="card-text">
              Mobile No - {props.contact.alt_contact_number}
            </p>
          )}
          <h4 className="card-text">GSTIN - {props.contact.gstin.toUpperCase()}</h4>
          <Link
            to={{
              pathname: `/contact/${props.contact.uuid}`,
              state: { contact: props.contact },
            }}
          >
            <button className="btn btn-outline-success">
              Preview
            </button>
          </Link>
          <button
            className="btn btn-outline-danger"
            onClick={() => props.clickHandler(props.contact.uuid)}
            style={{ marginLeft: "10px" }}
          >
            Delete
          </button>
          <Link to={{ pathname: `/edit`, state: { contact: props.contact } }}>
            <button
              className="btn btn-outline-primary"
              style={{ marginLeft: "10px" }}
            >
              Edit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
