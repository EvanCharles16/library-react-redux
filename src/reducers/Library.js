const initialState = {
  data: [],
  dataDelete: {},
  isShowAdd: false,
  isShowDelete: false,
};

const Library = (state = initialState, action) => {
  switch (action.type) {
    case "LIBRARY_ADD":
      return { ...state, data: [...state.data, action.payload] };

    case "LIBRARY_GET_DATA":
      return { ...state, data: action.payload };

    case "LIBRARY_DELETE_DATA":
      const data = state.data.filter((item) => {
        if (item.id == action.payload) return false;
        return true;
      });
      return { ...state, data: data };

    case "LIBRARY_SHOW_ADD":
      return { ...state, isShowAdd: true };

    case "LIBRARY_HIDE_ADD":
      return { ...state, isShowAdd: false };

    case "LIBRARY_SHOW_DELETE":
      return { ...state, isShowDelete: true, dataDelete: action.payload };
    default:
      return state;
  }
};

export default Library;
