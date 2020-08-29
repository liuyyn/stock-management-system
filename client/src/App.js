import React from "react";
import "./App.css";
import { Header } from "./components/common/Header";
import { Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import Companies from "./components/Companies";
import Products from "./components/products/Products";
import AddProductPage from "./components/products/AddProductPage";
import AllProductsPage from "./components/products/AllProductsPage";
import PerCompanyPage from "./components/products/PerCompanyPage";
import "bootstrap/dist/css/bootstrap.min.css"; // so reactstrap and bootstrap works

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products/addProducts" component={AddProductPage} />
        <Route path="/products/allProducts" component={AllProductsPage} />
        <Route
          path="/products/productsPerCompany/:id"
          component={PerCompanyPage}
        />
        <Route path="/products/productsPerCompany" component={PerCompanyPage} />
        <Route path="/products/productsPerCategory" component={Products} />
        <Route path="/products" component={Products} />
        <Route path="/companies" component={Companies} />
      </Switch>
    </div>
  );
}

export default App;
