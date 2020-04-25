import React, { useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { connect } from "react-redux";

import { getData } from "../../action/Library";
import Add from "./Add";
import Item from "./Item";

const Main = (props) => {
  useEffect(() => {
    if (!props.data.length) props.getData();
  }, []);

  return (
    <div>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <td>Title</td>
              <td>Year</td>
              <td>Number</td>
              <td>Status</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {props.data.map((item, index) => (
              <Item key={index} data={item} />
            ))}
          </tbody>
        </Table>
        <Add />
      </Container>
    </div>
  );
};

// mapStateToProps ,dr reducers/index.js
const mapStateToProps = (state) => {
  return {
    data: state.Library.data,
  };
};

const mapDispatchToProps = { getData };

export default connect(mapStateToProps, mapDispatchToProps)(Main);
