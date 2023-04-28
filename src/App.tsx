import React from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./components/Pages/Home"
import NotFound from "./components/Pages/NotFound"
import Register from "./components/Pages/Auth/Register"
import Login from "./components/Pages/Auth/Login"
import { ProtectedRoute } from "./components/Pages/Auth/ProtectedRoute"
import Profile from "./components/Pages/Profile"
import Product from "./components/Pages/Product"
import Products from "./components/Pages/Products"
import Car from "./components/Pages/Car"
import LayoutDashboard from "./components/Dashboard-Components/Layout"
import Analytics from "./components/Dashboard-Components/Analytics"
import ProductsDashboard from './components/Dashboard-Components/Products'

export default function App () {
  return (
    <BrowserRouter>
       <Routes>
         <Route element={<Layout />} >
           <Route path="/" element={<Home />} />
           <Route path="/products" element={<Products />} />
           <Route path="/product/:id" element={<Product />} />
           {/* Routes for need login */}
           <Route element={<ProtectedRoute isAllowed={true} />} >
              <Route path="/profile" element={<Profile />} />
              <Route path="/car" element={<Car />} />
           </Route>
           <Route path="/*" element={<NotFound />} />
         </Route>
         {/* Routes for need admin */}
         <Route element={<ProtectedRoute isAllowed={true} />} >
            <Route element={<LayoutDashboard />} >
              <Route path="/dashboard" element={<Analytics/>}/>
              <Route path="/dashboard/products" element={<ProductsDashboard/>}/>
            </Route>
         </Route>
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
       </Routes>
     </BrowserRouter>
  )
}