import React, { use } from "react";
import { Routes, Route } from "react-router-dom";
import AuthLayout from "./components/auth/Layout";
import AuthLogin from "./pages/auth/Login";
import AuthRegister from "./pages/auth/Register";
import AdminLayout from "./components/admin-view/AdminLayout";
import AdminDashboard from "./pages/admin-view/AdminDashboard";
import AdminProducts from "./pages/admin-view/Products";
import AdminOrders from "./pages/admin-view/Orders";
import AdminFeatures from "./pages/admin-view/Features";
import ShoppingLayout from "./components/shopping-view/ShoppingLayout";
import Shopping from "./pages/shopping-view/Shopping";
import NotFound from "./pages/not-found/NotFound";
import Products from "./pages/shopping-view/Products";
import Account from "./pages/shopping-view/Account";
import Home from "./pages/shopping-view/Home";
import Checkout from "./pages/shopping-view/Checkout";
import CheckAuth from "./components/common/CheckAuth";
import Unauth from "./pages/unauth-pages/Unauth";
import { useSelector } from "react-redux";

const App = () => {

  const {user,isAuthenticated}=useSelector(state=>state.auth)
  return (
    <div className=" flex flex-col overflow-hidden bg-white">
      <Routes>
        <Route
          path="/auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
          }
        >
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>
        <Route
          path="/admin"
          element={
            <CheckAuth user={user} isAuthenticated={isAuthenticated}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="features" element={<AdminFeatures />} />
        </Route>
        <Route
          path="/shop"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <ShoppingLayout />
            </CheckAuth>
          }
        >
          <Route path="shopping" element={<Shopping />} />
          <Route path="products" element={<Products />} />
          <Route path="account" element={<Account />} />
          <Route path="home" element={<Home />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>

        <Route path="*" element={<NotFound />} />
        <Route path="/unauth-page" element={<Unauth />}/>
      </Routes>
    </div>
  );
};

export default App;
