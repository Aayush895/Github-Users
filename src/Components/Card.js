import "../CSS/Card.css";

const Card = (props) => {
  return (
    <>
      <div className="card text-center my-4 pt-2">
        <div className="container d-flex justify-content-evenly">
          <img src={props.photoSource}></img>
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <div className="achievement-container d-flex pt-2">
              <p className="card-text">
                Articles <span>{props.articles}</span>{" "}
              </p>
              <p>
                Followers <span>{props.followers}</span>
              </p>
              <p>
                following <span>{props.following}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="card-footer text-muted mt-3">User - {props.number}</div>
      </div>
    </>
  );
};

export default Card;
