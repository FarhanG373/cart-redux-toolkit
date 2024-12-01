import logo from "./logo.svg";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Category from "./pages/Category";
import Home from "./pages/Home";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import CategorySingle from "./pages/CategorySingle";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
function App() {
  const em = localStorage.getItem("prodEmail");
  const ps = localStorage.getItem("prodPassword");
  return (
    <div className="App">
      https://fakeapi.platzi.com/<br></br>
      https://www.geeksforgeeks.org/implementing-add-to-cart-functionality-using-redux-toolkit-in-react/<br></br>
      https://blog.openreplay.com/building-a-shopping-cart-in-react-with-redux-tools/<br></br>
      https://codesandbox.io/s/build-a-shopping-cart-with-react-redux-exodg?file=/src/actions/index.js
      <NavBar />
      <Routes>
        <Route path="/" element={(em && ps) ? <Home /> : <LogIn />} />
        <Route path="/category" element={(em && ps) ? <Category /> : <LogIn />} />
        <Route path="/products" element={(em && ps) ? <Products /> : <LogIn />} />
        <Route
          path="/product/:id"
          element={(em && ps) ? <SingleProduct /> : <LogIn />}
        />
        <Route
          path="/category/:id"
          element={(em && ps) ? <CategorySingle /> : <LogIn />}
        />
        <Route path="/login" element={<LogIn />} />
        <Route path="*" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;