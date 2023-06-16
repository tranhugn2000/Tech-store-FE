import {Routes, Route} from 'react-router-dom';
import '../src/assets/style/app.css';
import '../src/assets/style/style.css';
import Layout from './components/layout/user';
import HomePage from './pages/homepage';
import Products from './pages/product';
import Login from './components/Login/login';
import Register from './components/Register/register';
import AuthContextProvider from './context/authContext'

function Router() {
    return (
        <AuthContextProvider>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/products" element={<Products />} />
                </Route>
                
                {/* Page 404 */}
                <Route path="*" element={<h1 className="text-center">404 Not Found</h1>} />
            </Routes>
        </AuthContextProvider>
    );
}

export default Router;