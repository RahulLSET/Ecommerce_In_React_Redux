// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.js/x'
import { Provider } from 'react-redux'
import store from './components/Store.js'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from './App.jsx'
import Error from './components/Error.jsx'
import Detail from './components/Detail.jsx'
import Cart from './components/Cart.jsx'
import Wish from './components/Wish.jsx'
import Signup from './components/Signup.jsx'
import Signin from './components/Signin.jsx'
const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />
  },
  {
    path: "/detail/:id",
    element: <Detail/>,
    errorElement: <Error />
  },
  {
    path: "/wish",
    element: <Wish />,
    errorElement: <Error />
  },
  {
    path: "/cart",
    element: <Cart/>,
    errorElement: <Error />
  },
  {
    path: "/signup",
    element: <Signup/>,
    errorElement: <Error />
  },
  {
    path: "/signin",
    element: <Signin/>,
    errorElement: <Error />
  },
])



createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={route}>
      <App />
    </RouterProvider>
  </Provider>
)
