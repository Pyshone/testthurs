import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from "react";
import AuthLayouts from './layouts/authLayouts';
import AppLayouts from './layouts/appLayouts';
// import Login from './views/auth/login';
import About from './views/app/pages/about';
import Home from './views/app/pages/home';
import Contact from './views/app/pages/contact';
import Blog from './views/app/pages/blog';
import Service from './views/app/pages/service';
import Carthome from './components/sections/shop/carthome';
// import Checkout from './components/pages/checkout';


const Login  = lazy (()=> import("./views/auth/login"))
const Profile  = lazy (()=> import("./views/app/pages/profile"))
const Shop  = lazy (()=> import("./views/app/pages/shop"))
const Shopcart  = lazy (()=> import("./components/sections/shop/shopcart"))
const Cartlist  = lazy (()=> import("./components/sections/shop/cartlist"))
const Checkout = lazy (()=> import("./components/pages/checkout")) 



function App() {
  return (
    <Router>
        <Suspense fallback={<h1 style={{ fontSize: "50px",color:" rgb(0, 48, 70)"}}>Loading...</h1>}>
      <Routes>
        <Route path="login" element={<AuthLayouts />}>
          <Route  element={<Login />} />
        </Route>
        <Route path="/" element={<AppLayouts />}>
          <Route  element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="home" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog/>} />
          <Route path="service" element={<Service />} />
          <Route path="shop" element={<Shop/>} />
          <Route path='profile' element={<Profile/>}/>
          <Route path='/shopcart/:id' element={<Shopcart/>}/>
          <Route path='cart/:id' element={<Cartlist/>}/>
          <Route path='your-cart' element={<Carthome/>}/>
          <Route path='checkout' element={<Checkout/>}/>

        </Route>
      </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
