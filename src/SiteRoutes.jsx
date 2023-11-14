import Contact from './page/Contact'
import Home from './page/Home'
import About from './page/About'
import { Route, Routes } from 'react-router-dom'
import PageNotFound from './page/PageNotFound'
import { Category, Product, Products, ProductsLayout } from './products'
import Login from './page/Login'
import Fav from './page/Fav'
import PrivateRoute from './PrivateRoute'

export default function SiteRoutes({handleLogin, user}){
return (

<Routes>

<Route path="/" element={<Home user={user} />}/>
<Route path="/About" element={<About />}/>
<Route path="/Contact" element={<Contact />}/>
<Route path="/Products" element={<ProductsLayout />} > 

    <Route index={true} element={<Products user={user} />} /> 
    <Route path="category/:categoryName" element={<Category user={user}/>} /> 
    <Route path="product/:productId" element={<Product user={user}/>} /> 
</Route>

<Route path="/login" element={<Login handleLogin ={handleLogin} />}/>
<Route path="/fav" element={ <PrivateRoute user={user}> <Fav /> </PrivateRoute>}   />


<Route path="*" element={<PageNotFound />}/>

</Routes>
)
}