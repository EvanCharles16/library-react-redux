import React from "react";

import { connect } from "react-redux";

import { deleteData } from "../../action/Library";
const Item = (props) => {
  const handleClick = () => {
    props.deleteData(props.data.id);
  };
  return (
    <tr>
      <td>{props.data.title}</td>
      <td>{props.data.year}</td>
      <td>{props.data.number}</td>
      <td>{props.data.status}</td>
      <td>
        <button className="btn btn-danger" onClick={handleClick}>
          hapus
        </button>
      </td>
    </tr>
  );
};

const mapDispatchToProps = { deleteData };

export default connect(null, mapDispatchToProps)(Item);
