import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { connect } from "react-redux";

import { hideAdd, add } from "../../action/Library";

const Add = (props) => {
  const [data, setData] = useState({
    title: "",
    year: "",
    number: "",
    status: "false",
  });

  const handleChange = (event) => {
    let { name, value } = event.currentTarget;

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleAdd = () => {
    props.add(data);
  };

  const handleClose = () => {
    props.hideAdd();
  };

  return (
    <div>
      <Modal show={props.isShowAdd} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <label for="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={data.title}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label for="year">Years</label>
            <input
              type="number"
              className="form-control"
              id="year"
              name="year"
              value={data.year}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label for="number">Number</label>
            <input
              type="number"
              className="form-control"
              id="number"
              name="number"
              value={data.number}
              onChange={handleChange}
            />
          </div>
          <div className="form-check">
            <label for="status"></label>
            <input
              type="checkbox"
              className="form-check-input"
              id="status"
              name="status"
              checked={data.status}
              onChange={handleChange}
            />
            <label className="form-check-label" for="defaultCheck">
              Status
            </label>
            {/* Option Select for Status = { available or not} */}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isShowAdd: state.Library.isShowAdd,
  };
};

const mapDispatchToProps = {
  hideAdd,
  add,
};

export default connect(mapStateToProps, mapDispatchToProps)(Add);
