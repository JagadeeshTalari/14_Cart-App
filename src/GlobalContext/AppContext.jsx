import { useContext, useReducer } from "react";
import { createContext } from "react";
import reducer from "../Reducer/reducer";
import cartItems from "../data";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const initialState = {
  loading: false,
  cart: [],
};

const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
export default AppContext;
