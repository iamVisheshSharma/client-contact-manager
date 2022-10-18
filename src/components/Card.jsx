import { Link } from "react-router-dom";
import "./cardStyle.css";

export default function Card(props) {
  return (
    <div className={`col-xs-12 col-sm-6 col-md-4`}>
      <div className="card text-center bg-warning w-100 mt-4">
        <div className="card-body text-dark">
          <h4 className="card-title font-weight-bold text-monospace">{props.contact.name.toUpperCase()}</h4>
          <p className="card-text font-weight-normal">{props.contact.address}</p>
          <p className="card-text">
            Mobile No - {props.contact.contact_number}
          </p>
          {props.contact.alt_contact_number && (
            <p className="card-text">
              Mobile No - {props.contact.alt_contact_number}
            </p>
          )}
          <p className="card-text">GSTIN - {props.contact.gstin.toUpperCase()}</p>
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
