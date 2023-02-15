import "./scss/app.scss";
import { Header } from "./components";
import { Home, NotFound, Cart } from "./pages"
import { Routes, Route } from "react-router-dom"



// import pizzas from "./assets/pizzas.json";

export const App = () => {

  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>

    </>
  );
};
