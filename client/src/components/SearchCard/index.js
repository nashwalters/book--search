import React from "react";
import API from "../../utils/API";

const Card = (props) => {
  async function saveBooks() {
    console.log("Clicked on save button");
    let result = await API.saveBooks(props);
    console.log("[saveBooks.card]", result);
  }

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={
              props.image ||
              "https://stephenblandino.com/wp-content/uploads/2015/07/book-placeholder.jpg"
            }
            alt={props.title}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <h6 className="card-text">
              <small className="text-muted">Written by {props.authors} </small>
            </h6>
            <p className="card-text">{props.description}</p>
          </div>
          <div
            className="btn-group float-right"
            role="group"
            aria-label="Basic mixed styles example"
          >
            <a
              href={props.link}
              target="_blank"
              rel="noopener noreferrer"
              type="button"
              className="btn btn-primary"
            >
              View
            </a>
            <button
              disabled={!saveBooks}
              onClick={() => {
                saveBooks();
              }}
              value={props}
              type="button"
              className="btn btn-success"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
