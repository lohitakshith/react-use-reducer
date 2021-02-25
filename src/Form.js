import React from "react";
const Form = ({ name, date, setName, setDate, handleSubmit }) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                value={name}
                placeholder="Enter Todo"
                onChange={e => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="form-group">
              <input
                type="date"
                min={date}
                className="form-control"
                value={date}
                onChange={e => setDate(e.target.value)}
              />
            </div>
          </div>
        </div>
        <button className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};
export default Form;
