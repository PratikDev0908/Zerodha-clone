import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './LandingPage/home/HomePage'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Signup from './LandingPage/singup/SignUp';
import AboutPage from './LandingPage/about/AboutPage';
import ProductPage from './LandingPage/product/ProductPage';
import PricingPage from './LandingPage/pricing/PricingPage';
import SupportPage from './LandingPage/support/SupportPage';
import Navbar from './Navbar';
import Footer from './Footer';
import NotFound from './NotFound';



createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <Navbar />
 <Routes>
  <Route path='/' element={<HomePage/>}></Route>
  <Route path="/signup" element={<Signup/>}></Route>
  <Route path='/about' element={<AboutPage/>}></Route>
  <Route path='/product' element={<ProductPage/>}></Route>
  <Route path='/pricing' element={<PricingPage/>}></Route>
  <Route path='/support' element={<SupportPage/>}></Route>
  <Route path='*' element={<NotFound/>}></Route>
 </Routes>
 <Footer />
 </BrowserRouter>
)
