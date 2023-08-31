import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'remixicon/fonts/remixicon.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Login from './routes/Login/Login.jsx';
import RootLayout from "./routes/RootLayout";
import SignUp from "./routes/SignUp/SignUp.jsx";

const router = createBrowserRouter([
    {path: '/',
        element: <RootLayout/>,
        children: [
            {path: '/',
                element: <App/>,
                children: [
                    {
                        path: '/login',
                        element: <Login/>
                    },
                    {
                        path: '/signup',
                        element: <SignUp/>
                    }
                ]
            },
        ]
    },

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
