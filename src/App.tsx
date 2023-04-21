import "./scss/app.scss";
import React from "react";
import { Header, FullPizza } from "./components";
import { Home, NotFound, Cart } from "./pages"
import { Routes, Route } from "react-router-dom"

// import pizzas from "./assets/pizzas.json";


export interface ContextProps {
  searchValue: string;
  setSearchValue: (e: string) => void;
}

export const SearchContext = React.createContext<ContextProps | null>(null)

export const App = () => {

  const [searchValue, setSearchValue] = React.useState("")

  return (
    <>
      <div className="wrapper">
        <SearchContext.Provider value={{searchValue, setSearchValue}}  >
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/pizza/:id" element={<FullPizza />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </SearchContext.Provider>
      </div>

    </>
  );
};
