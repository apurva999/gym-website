import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainPage from './Pages/mainPage';
import reportWebVitals from './reportWebVitals';
import AboutPage from './Pages/aboutPage';
import RegistrationPage from './Pages/register';
import ActivityPage from './Pages/activityPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProgramPage from './Pages/programPage';
import { RecoilRoot } from 'recoil';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>,
  },
  {
    path : '/aboutPage',
    element : <AboutPage/>
  },
  {
    path : '/programPage',
    element : <ProgramPage/>
  },
  {
    path : '/register',
    element : <RegistrationPage/>
  },
  {
    path : '/activityPage',
    element : <ActivityPage/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Fragment>
    <RecoilRoot>
     <RouterProvider router={router} />
    </RecoilRoot>
  </Fragment>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
