import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div className={`col-xs-12 col-sm-6 col-md-4`}>
      <div className="card text-center w-100 mt-4" style={{backgroundColor: '#eee'}}>
        <div className="card-body text-dark">
          <h4 className="card-title font-weight-bold text-monospace">{props.contact.name.toUpperCase()}</h4>
          <p className="card-text font-weight-normal px-32">{props.contact.address}</p>
          <p className="card-text font-weight-normal">Mobile - {props.contact.contact_number}</p>
          <h5 className="card-text font-weight-bold">Party Gst - {props.contact.gstin.toUpperCase()}</h5>
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
