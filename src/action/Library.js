import axios from "axios";

const URL = "http://localhost:3500/library";
export const add = (data) => {
  return async (dispatch) => {
    const response = await axios.post(URL, data);
    dispatch({
      type: "LIBRARY_ADD",
      payload: response.data,
    });

    dispatch({
      type: "LIBRARY_HIDE_ADD",
    });
  };
};

export const deleteData = (id) => {
  return async (dispatch) => {
    await axios.delete(`${URL}/${id}`);

    dispatch({
      type: "LIBRARY_DELETE_DATA",
      payload: id,
    });
  };
};

export const getData = () => {
  return async (dispatch) => {
    const response = await axios.get(URL);
    dispatch({
      type: "LIBRARY_GET_DATA",
      payload: response.data,
    });
  };
};

export const showAdd = () => {
  return {
    type: "LIBRARY_SHOW_ADD",
  };
};

export const hideAdd = () => {
  return {
    type: "LIBRARY_HIDE_ADD",
  };
};

// export const showDelete = () => {
//   return {
//     type: "LIBRARY_SHOW_DELETE",
//     payload: data,
//   };
// };
