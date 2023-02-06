import { createContext, useContext, useReducer } from "react";
import filterReducer from "./reducers/filterReducer";

const initialState = {
  priceRange: {
    isBetween1500to4000: false,
    isBetween4001to7000: false,
    isAbove7001: false,
  },
  categories: {
    loafers: false,
    sneakers: false,
  },
};

// creating Filter context
const FilterContext = createContext();

// filter context provider
const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, initialState);

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

// using filter context
const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter };
