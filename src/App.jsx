import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Pages from "./pages/Pages";
import Products from "./pages/Products";
import Blog from "./pages/Blog";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import RootRouter from "./components/RootRouter";
import ShoppingCart from "./pages/ShoppingCart";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";

function App() {
  let myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootRouter />}>
        <Route path="/" element={<Home />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/products" element={<Products/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/shoppingCart" element={<ShoppingCart/>}/>
        <Route path="/shop/:id" element={<ProductDetails/>}/>
        <Route path="/login" element={<Login/>}/>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={myRoute} />
    </>
  );
}

export default App;
