import React from "react";
import { connect } from "react-redux";

import { showAdd } from "../../action/Library";

import Main from "./Main";

const Index = (props) => {
  const showAdd = () => {
    props.showAdd();
  };

  return (
    <div>
      <div className="text-center ">
        <h2>List Books</h2>
        <button onClick={showAdd} className="btn btn-primary mb-4">
          Add +
        </button>
        <Main />
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  showAdd,
};

export default connect(null, mapDispatchToProps)(Index);
