
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home/home';
import { AboutPage } from './pages/About/about';
import { MyProvider } from './utils/contextProvider';
import { Contact } from './pages/contact/contact';
import { Shop } from './pages/shop/shop';
import { Product } from './pages/Product/product';
import { ShopProduct } from './pages/ShowCart/shopProduct';
import { Signup } from './pages/signup/signup';
import { Signin } from './pages/signin/signin';
function App() {
  return (
    <MyProvider>
      <Routes >
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/product/:id' element={<Product/>} />
        <Route path='/ShopCart/:id' element={<ShopProduct/>} />
        <Route path='/Signin' element={<Signin/>} />
        <Route path='/Signup' element={<Signup/>} />
        
      </Routes >
    </MyProvider>

  );
}
export default App;
