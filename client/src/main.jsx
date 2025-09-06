import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './index.css'
import App from './App.jsx'

import HomePage from "./pages/HomePage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import PricingPage from "./pages/PricingPage.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>error</h1>,
    children: [
      {
        index: true,
        element: <HomePage/>,
      },
      {
        path: "/services",
        element: <ServicesPage/>
      },
      {
        path: "/contact",
        element: <ContactPage/>
      },
      {
        path: "/pricing",
        element: <PricingPage/>,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
