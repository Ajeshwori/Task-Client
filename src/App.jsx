
import { Outlet, Route, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/pages/home'
import Resources from './components/pages/resources'
import Product from './components/pages/ourProduct'
import ContactUs from './components/pages/contact'
import Signup from './components/form/signup'
import Login from './components/form/Login'
import Navbar from './components/global/Navbar'
import Dashboard from './components/local/Dashboard'

function App() {
  // <Route path="/" element={<Home/>}/>
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    )
  }
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/resources",
          element: <Resources />
        },
         {
          path: "/ourProduct",
          element: <Product />
        },
        {
          path: "/contact",
          element: <ContactUs />
        },
        
      ]
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/signup",
      element: <Signup />
    },
     {
          path: "/dashboard",
          element: <Dashboard />
        },
    

  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App