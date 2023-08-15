import { createContext, useEffect, useState } from "react";
import { fetchData } from "../utils/api";

export const Context = createContext();

export const AppContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [selectCategories, setSelectCategories] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);

  //Below we need to call API when category will change
  useEffect(() => {
    fetchSelectedCategoryData(selectCategories);
  }, [selectCategories]);

  const fetchSelectedCategoryData = async (query) => {
    setLoading(true);
    try {
      const { contents } = await fetchData(`search/?q=${query}`);
      // console.log(response);
      setSearchResults(contents);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        searchResults,
        setSearchResults,
        selectCategories,
        setSelectCategories,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
