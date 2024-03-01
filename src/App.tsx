import './App.css' 
import Dashboard from './pages/dashboard'
import { Route, Routes } from "react-router-dom";
import Login from './components/auth';
import ProductStore from './pages/product';
import Register from './components/auth/register';
import CategoryPage from './pages/category';
import StoreCategoryPage from './pages/category/StoreCategoryPage';
import ProductPage from './pages/product/product';
import Order from './components/oder';
import OrderPage from './pages/order';
import EditCategoryPage from './pages/category/EditCategory';
import EditProductPage from './pages/product/EditProduct';
import ProfilePage from './pages/profile';
import EditProfilePage from './pages/profile/EditProfile';
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/category" element={<CategoryPage/>}/>
      <Route path="/category/add" element={<StoreCategoryPage/>}/>
      <Route path="/category/:id" element={<EditCategoryPage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/products/add" element={<ProductStore/>}/>
      <Route path="/products" element={<ProductPage/>}/>
      <Route path="/products/:id" element={<EditProductPage/>}/>
      <Route path="/order/:id" element={<Order/>}/>
      <Route path="/order" element={<OrderPage/>}/>
      <Route path="/profile" element={<ProfilePage/>}/>
      <Route path="/profile/:id" element={<EditProfilePage/>}/>
    </Routes>
    
    </>
  )
}

export default App
