const filterReducer = (state, action) => {
  switch (action.type) {
    case "APPLY_FILTER":
      return {
        ...action.payload,
      };

    default:
      return state;
  }
};

export default filterReducer;
