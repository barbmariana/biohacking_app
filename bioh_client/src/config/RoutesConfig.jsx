import { BrowserRouter, useNavigate, Route, Routes} from 'react-router-dom';
import Login from "../pages/Login";
import Home from "../pages/Home";
import Dashboard from '../pages/Dashboard';
import Auth from '../components/Auth';


const ProtectedRoute = ({  element: Element, ...rest  }) => {
  const navigate = useNavigate();
  console.log("Entrou nas rotas")

  return (
    <Route
      {...rest}
      element={
        sessionStorage.getItem('token') ? (
          <Element />
        ) : (
          <>
            {navigate('/login')}
          </>
        )
      }
    />
  );
};


const RoutesConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/login' element={<Auth><Login/></Auth>}></Route>
        <Route
        path='/dashboard'
        element={
          <Auth>
            <ProtectedRoute element={<Dashboard />} />
          </Auth>
        }
      />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesConfig;