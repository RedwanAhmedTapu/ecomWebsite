const ProductReducer = (state, action) => {
  console.log(action.payload);
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "SET_API_DATA":
      const featureData = action.payload.filter((curElem) => {
        console.log(curElem.featured);
        return curElem.featured === true;
      });
      //   console.log(featureData);

      return {
        ...state,
        isLoading: false,
        // products: action.payload,
        featureProducts: featureData,
      };

    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export default ProductReducer;
